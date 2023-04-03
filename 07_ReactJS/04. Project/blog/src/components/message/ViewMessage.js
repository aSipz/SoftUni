import { userAction } from '../../const/actions';

export default function ViewMessage({ setAction, confirmAction }) {
    const { text, receiver, setReceiver, currentMsg, setConfirmText } = confirmAction;

    const closeHandler = () => {
        setAction(userAction.close);
        setReceiver(null);
    }

    const replyHandler = () => {
        setAction(userAction.sendMsg);
        setReceiver(receiver);
        setConfirmText(state => state.replace('from: ', ''));
    }

    return (
        <div className="user-container">

            <header className="headers">
                <h2>{text}</h2>
                <button className="btn close" onClick={closeHandler}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </header>

            <div className='message'>
                {currentMsg.message.split('\n').map((el, i) => <p key={i + Math.random() * 10000}>{el.trim()}</p>)}

            </div>

            <div className="form-actions">
                <button className="button red submit" onClick={closeHandler}>Close</button>
                {receiver && <button className="submit" onClick={replyHandler}>Reply</button>}
            </div>

        </div>
    );
}