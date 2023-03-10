import './Profile.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EditProfile from './EditProfile';
import Spinner from '../spinner/Spinner';

import { AuthContext } from '../../contexts/AuthContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ActionContext } from '../../contexts/ActionContext';
import { userAction } from '../../const/actions';

import * as userService from '../../service/user';

export default function Profile() {
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();

    const { changeAction } = useContext(ActionContext);
    const { user, userLogout } = useContext(AuthContext);
    const { loading, changeLoading } = useContext(LoadingContext);

    const onLogout = () => {
        changeLoading();
        userService.logout()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        changeLoading();
        navigate('/');
        userLogout();
    }

    const onEdit = () => {
        setEdit(state => !state);
    }

    const onDelete = () => {
        changeAction(userAction.confirm);
    }

    return (
        <section className="main">

            {loading && <Spinner />}

            <article className="post page">
                <div className="inner">
                    <div className="profile-header">
                        <h1>My profile</h1>
                        <button onClick={onLogout}>Logout</button>
                    </div>

                    <div className="content">
                        <div className="image-container">
                            <img src={user.imageUrl} alt="profile-image" className="image" />
                        </div>
                        <div className="user-details">
                            <p>First Name: <strong> {user.firstName} </strong></p>
                            <p>Last Name: <strong> {user.lastName} </strong></p>
                            <p>Username: <strong> {user.username} </strong></p>
                            <p>Email: <strong> {user.email}</strong></p>
                            <p>About me: <strong> {user.description}</strong></p>
                            <p>Joined: <strong> {new Date(user.createdAt).toUTCString()}</strong></p>
                            {user.createdAt !== user.updatedAt && <p>Last updated: <strong> {new Date(user.updatedAt).toUTCString()}</strong></p>}
                        </div>

                        <div className="profile-control">
                            <button className='button green' onClick={onEdit}>Edit</button>
                            <button className='button red delete' onClick={onDelete}>Delete</button>
                        </div>

                    </div>

                    {edit && <EditProfile onClose={onEdit} />}

                </div>
            </article>
        </section>
    );
}