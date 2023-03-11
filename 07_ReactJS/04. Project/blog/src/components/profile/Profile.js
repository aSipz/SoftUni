import './Profile.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EditProfile from './EditProfile';

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
    const { changeLoading } = useContext(LoadingContext);

    const onLogout = async () => {
        changeLoading();

        try {
            await userService.logout();
        } catch (error) {
            console.log(error);
        }

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

            <article className="post page">
                <div className="inner">


                    {edit
                        ? <EditProfile onClose={onEdit} />
                        : <>
                            <div className="profile-header">
                                <h1>My profile</h1>
                                <button onClick={onLogout}>Logout</button>
                            </div>

                            <div className="content">
                                <div className="image-container">
                                    <img src={user.imageUrl} alt="avatar" className="image" />
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
                                    <button className='button red delete' onClick={onDelete}>Delete profile</button>
                                </div>

                            </div>
                        </>}

                </div>
            </article>
        </section>
    );
}