import { createContext, useCallback, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import * as userService from '../service/user';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('auth', null);

    const userLogout = useCallback(() => {
        setUser(null);
    }, [setUser]);

    useEffect(() => {
        user &&
            userService.validateSession()
                .then()
                .catch(error => {
                    error.message === 'Invalid session token' && userLogout();
                });
    }, [userLogout, user]);

    function userLogin(userData) {
        setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}