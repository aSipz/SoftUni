import './Messages.css';

import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';
import Spinner from '../spinner/Spinner';
import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';
import Message from './Message';
import Error from '../error/Error';

import { AuthContext } from '../../contexts/AuthContext';
import { MessageContext } from '../../contexts/MessageContext';
import { userAction } from '../../const/actions';
import * as messageService from '../../service/message';

const searchFields = ['message', 'senderName', 'receiverName'];

export default function Messages() {

    const [activeTab, setActiveTab] = useState({
        'received': true,
        'sent': false
    });
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [confirmText, setConfirmText] = useState('');
    const [receiver, setReceiver] = useState(null);
    const [currentMsg, setCurrentMsg] = useState(null);

    const [action, setAction] = useOverlay();

    const { user, userLogout } = useContext(AuthContext);
    const { unreadMsg, markReadMessages } = useContext(MessageContext);

    const previousValue = useRef(unreadMsg);

    useEffect(() => {
        messageService.getRelated(user.objectId)
            .then((result) => {

                setMessages(result.results
                    .map(m => {
                        const userInfo = {
                            'senderName': m.sender ? m.sender.firstName + ' ' + m.sender.lastName : 'deleted user',
                            'receiverName': m.receiver ? m.receiver.firstName + ' ' + m.receiver.lastName : 'deleted user'
                        };
                        return m.receiver?.objectId === user.objectId
                            ? { ...m, 'inbox': true, ...userInfo }
                            : { ...m, ...userInfo }
                    }));

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                if (error.message === 'Invalid session token') {
                    userLogout();
                };
            });
    }, [user.objectId, userLogout]);

    useEffect(() => {

        if (previousValue.current !== unreadMsg) {
            messageService.getNewMessages(user.objectId)
                .then((result) => {

                    setMessages(state => [
                        ...result.results
                            .filter(m => !state.some(e => e.objectId === m.objectId))
                            .map(m => ({
                                ...m,
                                'inbox': true,
                                'senderName': m.sender.firstName + ' ' + m.sender.lastName,
                                'receiverName': m.receiver.firstName + ' ' + m.receiver.lastName
                            })),
                        ...state
                    ]);

                    previousValue.current = unreadMsg;

                })
                .catch((error) => {
                    console.log(error);
                    if (error.message === 'Invalid session token') {
                        userLogout();
                    };
                });
        }

    }, [user.objectId, unreadMsg, userLogout]);

    useEffect(() => {

        if (confirm) {
            const msg = messages.find(m => m.objectId === currentMsg);
            const updateValue = msg.inbox
                ? { receiverDeleted: true }
                : { senderDeleted: true };
            const unread = msg.read === false && msg.receiver?.objectId === user.objectId;

            messageService.updateMessage(currentMsg, updateValue)
                .then(() => {

                    setMessages(state => state.filter(m => m.objectId !== currentMsg));
                    setAction(userAction.close);
                    setLoading(false);
                    setConfirm(false);
                    setCurrentMsg(null);

                    if (unread) {
                        markReadMessages();
                        previousValue.current = unreadMsg - 1;
                    }

                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                    setLoading(false);
                    if (error.message === 'Invalid session token') {
                        userLogout();
                    };
                });
        }
    }, [confirm, currentMsg, markReadMessages, messages, setAction, user.objectId, unreadMsg, userLogout]);

    const onSearch = useCallback((searchObj) => {
        const { messages: search } = searchObj;
        search
            ? setMessages(state => state
                .map(m => Object.entries(m)
                    .some(([k, v]) => searchFields.includes(k) && v.toLowerCase().includes(search.toLowerCase()))
                    ? { ...m, hidden: false }
                    : { ...m, hidden: true }))
            : setMessages(state => state.map(m => ({ ...m, hidden: false })));

    }, []);

    const onDelete = (messageId, e) => {
        e.stopPropagation();
        setAction(userAction.confirm);
        setConfirmText('Are you sure you want to delete this message?');
        setCurrentMsg(messageId);
    }

    const onView = (message) => {
        setAction(userAction.readMsg);

        if (message.inbox) {

            if (!message.read) {
                try {
                    messageService.updateMessage(message.objectId, { read: true })
                } catch (error) {
                    console.log(error);
                    if (error.message === 'Invalid session token') {
                        userLogout();
                    };
                    return;
                }
                markReadMessages();
                previousValue.current = unreadMsg - 1;
                message.read = true;
                setMessages(state => [...state]);
            }

            setConfirmText(`Message from: ${message.senderName}`);
            setReceiver(message.sender);

        } else {
            setConfirmText(`Message to: ${message.receiverName}`);
        }

        setCurrentMsg(message);
    }

    const onTabClick = (tabName) => {
        if (activeTab[tabName]) {
            return;
        }
        setActiveTab(state => ({ 'received': !state.received, 'sent': !state.sent }));
    }

    const confirmAction = {
        action: () => {
            setLoading(state => !state);
            !receiver
                ? setConfirm(state => !state)
                : setConfirm(false);
        },
        text: confirmText,
        receiver,
        setReceiver,
        currentMsg,
        setConfirmText,
        setMessages
    };

    const messagesToShow = messages
        .filter(m => activeTab.received ? m.inbox && !m.hidden : !m.inbox && !m.hidden);

    return (
        <section className="main">

            {loading && <Spinner />}

            {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

            <article className="post page">
                <div className="inner">
                    <h2>Messages</h2>

                    <SearchBar searchFor="messages" onSearch={onSearch} />

                    <div className="message-wrapper">
                        <div
                            className={`tab received ${activeTab.received && 'active'}`}
                            onClick={onTabClick.bind(null, 'received')}
                        >
                            Received
                        </div>
                        <div
                            className={`tab received ${activeTab.sent && 'active'}`}
                            onClick={onTabClick.bind(null, 'sent')}
                        >
                            Sent
                        </div>
                    </div>
                    <div className="message-container">
                        {messagesToShow.length > 0
                            ? messagesToShow.map(m => <Message key={m.objectId} message={m} deleteHandler={onDelete} viewHandler={onView} />)
                            : !loading && <Error error={'No messages!'} />
                        }
                    </div>
                    <div className="overflow_boundary"></div>

                </div>
            </article>
        </section >
    );
}