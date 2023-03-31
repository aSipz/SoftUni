import './Messages.css';

import { useCallback, useContext, useEffect, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';
import Spinner from '../spinner/Spinner';
import Overlay from '../overlay/Overlay';
import useOverlay from '../../hooks/useOverlay';

import * as userService from '../../service/user';
import * as messageService from '../../service/message';
import { userAction } from '../../const/actions';
import { onChangeHandler } from '../../utils/inputUtils';
import { AuthContext } from '../../contexts/AuthContext';
import { MessageContext } from '../../contexts/MessageContext';
import Message from './Message';

const searchFields = ['firstName', 'lastName', 'username', 'email'];

export default function Messages() {

    const [activeTab, setActiveTab] = useState({
        'received': true,
        'sent': false
    });
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [confirmText, setConfirmText] = useState('');
    const [userRead, setUserRead] = useState(false);
    const [receiver, setReceiver] = useState();

    const [action, setAction] = useOverlay();


    const { user } = useContext(AuthContext);
    const { unreadMsg, markReadMessages } = useContext(MessageContext);

    useEffect(() => {
        messageService.getRelated(user.objectId)
            .then((result) => {

                setMessages(result.results.map(m => m.receiver.objectId === user.objectId ? { ...m, 'inbox': true } : m));

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [user.objectId]);

    useEffect(() => {
        if (!userRead) {
            messageService.getNewMessages(user.objectId)
                .then((result) => {

                    setMessages(state => [
                        ...state,
                        ...result.results
                            .filter(m => !state.some(e => e.objectId === m.objectId))
                            .map(m => ({ ...m, 'inbox': true }))
                    ]);

                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        } else {
            setUserRead(false);
        }

    }, [user.objectId, unreadMsg, userRead]);

    useEffect(() => {
        if (!action) {
            setReceiver(null);
        }
    }, [action]);

    const onSearch = useCallback((searchObj) => {
        // const { user: search } = searchObj;
        // search
        //     ? setUsers(state => state.map(u => Object.entries(u).some(([k, v]) => searchFields.includes(k) && v.toLowerCase().includes(search.toLowerCase()))
        //         ? { ...u, hidden: false }
        //         : { ...u, hidden: true }))
        //     : setUsers(state => state.map(u => ({ ...u, hidden: false })));

        // setCurrentPage(1);
    }, []);

    const onDelete = (messageId, e) => {
        e.stopPropagation();
        setAction(userAction.confirm);
        setConfirmText('Are you sure you want to delete this message?')
    }

    const confirmAction = {
        action: () => {
            setLoading(state => !state);
            receiver
                ? setConfirm(state => !state)
                : setConfirm(false);
        },
        text: confirmText,
        receiver
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
                            .filter(m => activeTab.received ? m.inbox : !m.inbox)
                            .map(m => <Message key={m.objectId} message={m} deleteHandler={onDelete} />)
                        }
                    </div>

                </div>
            </article>
        </section >
    );
}