import { createContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('auth', null);

    const userLogout = useCallback(() => {
        setUser(null);
    }, [setUser]);

    function userLogin(userData) {
        setUser(userData);
    }

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}