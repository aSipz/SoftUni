import { useContext } from 'react';
import { ActionContext } from '../contexts/ActionContext';

import { userAction } from '../const/actions';

export default function useCloseModal() {
    const { changeAction } = useContext(ActionContext);

    const closeModalHandler = () => {
        changeAction(userAction.default);
    }

    return [closeModalHandler];
}