import './Messages.css';

import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';
import Spinner from '../spinner/Spinner';
import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';

import * as messageService from '../../service/message';
import { userAction } from '../../const/actions';
import { AuthContext } from '../../contexts/AuthContext';
import { MessageContext } from '../../contexts/MessageContext';
import Message from './Message';

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
    const [waitForMsg, setWaitForMsg] = useState(false);

    const [action, setAction] = useOverlay();

    const { user } = useContext(AuthContext);
    const { unreadMsg, markReadMessages } = useContext(MessageContext);

    const previousValues = useRef(unreadMsg);

    useEffect(() => {
        messageService.getRelated(user.objectId)
            .then((result) => {

                setMessages(result.results
                    .map(m => m.receiver.objectId === user.objectId
                        ? { ...m, 'inbox': true, 'senderName': m.sender.firstName + ' ' + m.sender.lastName, 'receiverName': m.receiver.firstName + ' ' + m.receiver.lastName }
                        : { ...m, 'senderName': m.sender.firstName + ' ' + m.sender.lastName, 'receiverName': m.receiver.firstName + ' ' + m.receiver.lastName }));

                // setWaitForMsg(true);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [user.objectId]);

    useEffect(() => {

        if (waitForMsg
            && previousValues.current.unreadMsg !== unreadMsg) {
            console.log('new messages');
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

                    previousValues.current = unreadMsg;

                })
                .catch((error) => {
                    console.log(error);
                });
        }
        // }

        if (!waitForMsg) {
            console.log('set wait');
            setWaitForMsg(true);
        }

    }, [user.objectId, unreadMsg, waitForMsg]);

    useEffect(() => {

        if (confirm) {
            const msg = messages.find(m => m.objectId === currentMsg);
            const updateValue = msg.inbox
                ? { receiverDeleted: true }
                : { senderDeleted: true };
            const unread = msg.read === false && msg.receiver.objectId === user.objectId;

            messageService.updateMessage(currentMsg, updateValue)
                .then(() => {

                    setMessages(state => state.filter(m => m.objectId !== currentMsg));
                    setAction(userAction.close);
                    setLoading(false);
                    setConfirm(false);
                    setCurrentMsg(null);
                    if (unread) {
                        console.log('unread');
                        markReadMessages();
                        // setWaitForMsg(false);
                    }

                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                    setLoading(false);
                });
        }
    }, [confirm, currentMsg, markReadMessages, messages, setAction, user.objectId]);

    const onSearch = useCallback((searchObj) => {
        const { messages: search } = searchObj;
        search
            ? setMessages(state => state.map(m => Object.entries(m).some(([k, v]) => searchFields.includes(k) && v.toLowerCase().includes(search.toLowerCase()))
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

            try {
                messageService.updateMessage(message.objectId, { read: true })
            } catch (error) {
                console.log(error);
                return;
            }

            markReadMessages();
            setConfirmText(`Message from: ${message.senderName}`);
            setReceiver(message.sender);
            message.read = true;
            setMessages(state => [...state]);
        } else {
            setConfirmText(`Message to: ${message.receiverName}`);
        }

        setCurrentMsg(message);
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

    const onTabClick = (tabName) => {
        if (activeTab[tabName]) {
            return;
        }
        setActiveTab(state => ({ 'received': !state.received, 'sent': !state.sent }));
    }

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
                        {messages
                            .filter(m => activeTab.received ? m.inbox && !m.hidden : !m.inbox && !m.hidden)
                            .map(m => <Message key={m.objectId} message={m} deleteHandler={onDelete} viewHandler={onView} />)
                        }
                    </div>

                </div>
            </article>
        </section >
    );
}