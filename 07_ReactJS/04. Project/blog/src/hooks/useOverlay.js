import { useState } from 'react';

import { userAction } from '../const/actions';

export default function useOverlay() {
    const [overlay, setOverlay] = useState({});

    const action = overlay.action;

    const setAction = (action) => {
        setOverlay(() => action ? { action: userAction[action] } : {});
    }

    return [action, setAction];
}