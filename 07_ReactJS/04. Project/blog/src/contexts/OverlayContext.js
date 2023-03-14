import { createContext, useState } from 'react';

import useOverlay from '../hooks/useOverlay';

import { userAction } from '../const/actions';

export const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [confirmAction, setConfirmAction] = useState({
        action: () => setConfirm(true),
        loading: () => setLoading(true),
        text: ''
    });
    const [action, setAction] = useOverlay();

    function changeLoading() {
        setLoading(state => !state);
    }

    function changeConfirm() {
        setConfirm(state => !state);
    }

    function changeAction(action) {
        setAction(userAction[action]);
    }

    function changeConfirmAction(text) {
        setConfirmAction(state => ({ ...state, text }));
    }

    return (
        <OverlayContext.Provider value={{
            loading,
            changeLoading,
            action,
            changeAction,
            confirm,
            changeConfirm,
            confirmAction,
            changeConfirmAction
        }}>
            {children}
        </OverlayContext.Provider>
    )
}

// const confirmAction = {
//     action: () => setConfirm(true),
//     text: 'Are you sure you want to delete this comment?',
//     loading: () => setLoading(true)
// }

// setAction(userAction.confirm);