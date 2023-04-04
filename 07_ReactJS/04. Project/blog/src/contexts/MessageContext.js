import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import useInterval from '../hooks/useInterval';
import { AuthContext } from './AuthContext';

import * as messageService from '../service/message';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {

    const [unreadMsg, setUnreadMsg] = useState(0);
    const [initialLoad, setInitialLoad] = useState(true);

    const { user } = useContext(AuthContext);

    const checkForMsg = useCallback(async () => {
        try {
            const result = await messageService.getUnread(user.objectId);
            if (result.count !== unreadMsg) {
                setUnreadMsg(result.count);
            }
        } catch (error) {
            console.log(error);
        }
    }, [user, unreadMsg]);

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

    useInterval(checkForMsg, user ? 10000 : null);

    const markReadMessages = useCallback(() => {
        setUnreadMsg(state => state > 1 ? state - 1 : 0);
    }, []);

    return (
        <MessageContext.Provider value={{ unreadMsg, markReadMessages }}>
            {children}
        </MessageContext.Provider>
    )
}