import { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import * as userService from '../service/user';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('auth', null);

    // useEffect(() => {
    //     userService.validateSession()
    //         .then()
    //         .catch(error => {
    //             console.log(error.message);
    //             error.message === 'Invalid session token' && userLogout();
    //         });
    // }, [userLogout]);

    function userLogin(userData) {
        setUser(userData);
    }

    function userLogout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}