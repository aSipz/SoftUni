import { userAction } from "../../const/actions";

export default function Confirm({ setAction, confirmAction}) {
   
    const { action, text} = confirmAction;

    const onDelete = () => {
        action();
    }

    return (
        <div className="confirm-container">
            <header className="headers">
                <h2>{text}</h2>
            </header>
            <div className="actions">
                <div className="form-actions">
                    <button onClick={() => setAction(userAction.close)}>Cancel</button>
                    <button className="button red" type="submit" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}