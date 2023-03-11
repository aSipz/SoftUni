import { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    function changeLoading() {
        setLoading(loading => !loading );
    }

    return (
        <LoadingContext.Provider value={{ loading, changeLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}