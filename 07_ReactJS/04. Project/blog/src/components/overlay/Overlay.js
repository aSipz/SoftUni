import './Overlay.css';

import Login from '../login/Login';
import Register from '../register/Register';
import Confirm from '../confirm/Confirm';
import SendMessage from '../message/SendMessage';
import ViewMessage from '../message/ViewMessage';

import { userAction } from '../../const/actions';

export default function Overlay({ action, setAction, confirmAction }) {

    const closeHandler = () => {
        setAction(userAction.close);
        if (confirmAction.setReceiver) {
            confirmAction.setReceiver(null);
        }

    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={closeHandler}></div>
            <div className="modal">

                {action === userAction.register && <Register setAction={setAction} />}

                {action === userAction.login && < Login setAction={setAction} />}

                {action === userAction.confirm && <Confirm setAction={setAction} confirmAction={confirmAction} />}

                {action === userAction.sendMsg && <SendMessage setAction={setAction} confirmAction={confirmAction} />}

                {action === userAction.readMsg && <ViewMessage setAction={setAction} confirmAction={confirmAction} />}

            </div>
        </div>
    );
}