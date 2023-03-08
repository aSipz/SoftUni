import { createContext, useState } from 'react';
import { userAction } from '../const/actions'

export const ActionContext = createContext();

export const ActionProvider = ({ children }) => {
    const [action, setAction] = useState(userAction.default);

    function changeAction(newStatus) {
        setAction(newStatus);
    }

    return (
        <ActionContext.Provider value={{ action, changeAction }}>
            {children}
        </ActionContext.Provider>
    )
}