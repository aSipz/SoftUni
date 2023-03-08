import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('auth', null);

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