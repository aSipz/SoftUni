import './Overlay.css';

import Login from '../login/Login';
import Register from '../register/Register';
import Confirm from '../confirm/Confirm';
import SendMessage from '../message/SendMessage';

import { userAction } from '../../const/actions';

export default function Overlay({ action, setAction, confirmAction }) {

    return (
        <div className="overlay">
            <div className="backdrop" onClick={() => setAction(userAction.close)}></div>
            <div className="modal">

                {action === userAction.register && <Register setAction={setAction} />}

                {action === userAction.login && < Login setAction={setAction} />}

                {action === userAction.confirm && <Confirm setAction={setAction} confirmAction={confirmAction} />}

                {action === userAction.sendMsg && <SendMessage setAction={setAction} confirmAction={confirmAction} />}

            </div>
        </div>
    );
}