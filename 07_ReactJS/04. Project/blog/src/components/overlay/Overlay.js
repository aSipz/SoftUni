import './Overlay.css';

import { useContext } from 'react';

import Login from '../login/Login';
import Register from '../register/Register';

import { ActionContext } from '../../contexts/ActionContext';
import { userAction } from '../../const/actions';
import useCloseModal from '../../hooks/useCloseModal';
import { LoadingContext } from '../../contexts/LoadingContext';

export default function Overlay() {

    const { action } = useContext(ActionContext);
    const { loading } = useContext(LoadingContext);
    const [closeModalHandler] = useCloseModal();

    return (
        <div className="overlay">
            <div className="backdrop" onClick={loading ? () => {} : closeModalHandler}></div>
            <div className="modal">

                {action === userAction.register && <Register />}

                {action === userAction.login && < Login />}

            </div>
        </div>
    );
}