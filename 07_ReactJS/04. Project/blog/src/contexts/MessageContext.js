import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import useInterval from '../hooks/useInterval';
import { AuthContext } from './AuthContext';

import * as messageService from '../service/message';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {

    const [unreadMsg, setUnreadMsg] = useState(0);
    const [initialLoad, setInitialLoad] = useState(true);
    const [delay, setDelay] = useState(10000);

    const { user, userLogout } = useContext(AuthContext);

    const checkForMsg = useCallback(async () => {
        try {
            const result = await messageService.getUnread(user.objectId);
            if (result.count !== unreadMsg) {
                setUnreadMsg(result.count);
            }
        } catch (error) {
            console.log(error);
            if (error.message === 'Invalid session token') {
                userLogout();
            };
        }
    }, [user, unreadMsg, userLogout]);

    useEffect(() => {
        window.addEventListener("visibilitychange", onVisibilityChange);
        return () => {
            window.removeEventListener("visibilitychange", onVisibilityChange);
        };
    }, []);

    useEffect(() => {
        if (user && initialLoad) {
            checkForMsg();
            setInitialLoad(false);
        }
    }, [user, checkForMsg, initialLoad]);

    useEffect(() => {
        if (!user && !initialLoad) {
            setInitialLoad(true);
        }
    }, [user, initialLoad]);

    useInterval(checkForMsg, user ? delay : null);

    const markReadMessages = useCallback(() => {
        setUnreadMsg(state => state > 1 ? state - 1 : 0);
    }, []);

    function onVisibilityChange() {
        if (document.visibilityState === "hidden") {
            setDelay(120000);
        } else {
            setDelay(10000);
        }
    }

    return (
        <MessageContext.Provider value={{ unreadMsg, markReadMessages }}>
            {children}
        </MessageContext.Provider>
    )
}