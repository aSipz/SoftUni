import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import Spinner from "../spinner/Spinner";

import * as userService from '../../service/user';
import { userAction } from "../../const/actions";

export default function Confirm({ setAction }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { user, userLogout } = useContext(AuthContext);

    const onDelete = async () => {

        setLoading(loading => !loading);

        try {
            await userService.deleteUser(user.objectId);
            navigate('/');
            userLogout();
            setAction(userAction.close);
        } catch (error) {
            console.log(error);
        }

        setLoading(loading => !loading);
    }

    return (
        <div className="confirm-container">

            {loading && <Spinner />}

            <header className="headers">
                <h2>Are you sure you want to delete this profile?</h2>
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