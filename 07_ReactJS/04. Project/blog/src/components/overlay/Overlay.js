import './Overlay.css';

import { useContext } from 'react';

import Login from '../login/Login';
import Register from '../register/Register';

import { ActionContext } from '../../contexts/ActionContext';
import { userAction } from '../../const/actions';

export default function Overlay() {

    const { action } = useContext(ActionContext);

    return (
        <div class="overlay">
            <div class="backdrop"></div>
            <div class="modal">

                {action === userAction.register && <Register />}

                {action === userAction.login && < Login />}

            </div>
        </div>
    );
}