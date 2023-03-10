import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";

import useCloseModal from "../../hooks/useCloseModal";
import Spinner from "../spinner/Spinner";

import * as userService from '../../service/user';

export default function Confirm() {
    const navigate = useNavigate();

    const { loading, changeLoading } = useContext(LoadingContext);
    const { user, userLogout } = useContext(AuthContext);

    const [closeModalHandler] = useCloseModal();

    const onDelete = () => {
        changeLoading();

        userService.deleteUser(user.objectId)
            .then((result) => {
                navigate('/');
                userLogout();

                closeModalHandler();
            })
            .catch((err) => {
                console.log(err);
            });
        changeLoading();
    }

    return (
        <div className="confirm-container">

            {loading && <Spinner />}

            <header className="headers">
                <h2>Are you sure you want to delete this account?</h2>
            </header>
            <div className="actions">
                <div className="form-actions">
                    <button onClick={closeModalHandler}>Cancel</button>
                    <button className="button red" type="submit" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}