import './Profile.css';

import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EditProfile from './EditProfile';
import Overlay from '../overlay/Overlay';
import Spinner from '../spinner/Spinner';
import useOverlay from '../../hooks/useOverlay';

import { AuthContext } from '../../contexts/AuthContext';
import { userAction } from '../../const/actions';

import * as userService from '../../service/user';
import { fileUpload } from '../../service/api';

export default function Profile() {
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [file, setFile] = useState();
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef(null);

    const [action, setAction] = useOverlay();

    const navigate = useNavigate();

    const { user, userLogout, userLogin } = useContext(AuthContext);

    useEffect(() => {
        if (confirm) {

            userService.deleteUser(user.objectId)
                .then(() => {
                    setAction(userAction.close);
                    navigate('/');
                    userLogout();

                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                    setLoading(false);
                });

        }
    }, [confirm, navigate, setAction, user, userLogout]);

    const handleFileChange = (e) => {

        if (e.target.files) {
            setFile(e.target.files[0]);
            e.target.value = null;
        }
    }

    const handleClick = () => {
        inputRef.current?.click();
    }

    const handleCancel = () => {
        setFile(null);
    }

    const handleFileUpload = async () => {
        if (!file) {
            return;
        }
        setDisabled(true);
        document.body.style.setProperty('cursor', 'wait');
        try {
            const result = await fileUpload(file.type, `/parse/files/${file.name}`, file);
            const res = await userService.updateUser(user.objectId, { 'picture': { ...result, '__type': 'File' } });
            user.picture.url = result.url;
            user.updatedAt = res;
            userLogin(user);
        } catch (error) {
            console.log(error);
        }
        document.body.style.setProperty('cursor', 'auto');
        setFile(null);
        setDisabled(false);
    }

    const onLogout = async () => {

        setLoading(loading => !loading);

        try {
            await userService.logout();
        } catch (error) {
            console.log(error);
        }

        setLoading(loading => !loading);
        navigate('/');
        userLogout();
    }

    const onEdit = () => {
        setEdit(state => !state);
    }

    const onDelete = async () => {
        setAction(userAction.confirm);
    }

    const confirmAction = {
        action: () => {
            setConfirm(true);
            setLoading(true);
        },
        text: 'Are you sure you want to delete this profile?'
    }

    return (
        <section className="main">

            {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

            {loading && <Spinner />}

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
                                    <img src={user.picture.url} alt="avatar" className="image" />
                                    <input
                                        accept="image/jpeg, image/png"
                                        type="file"
                                        ref={inputRef}
                                        hidden
                                        onChange={handleFileChange}
                                    />
                                    {file &&
                                        <div>
                                            <button className='button green' onClick={handleFileUpload} disabled={disabled}>Upload picture</button>
                                            <button className='button red' onClick={handleCancel} disabled={disabled}>Cancel</button>
                                        </div>
                                    }
                                    <button className='button' onClick={handleClick} disabled={disabled}>{file ? `${file.name} selected` : 'Change picture'}</button>
                                </div>
                                <div className="user-details">
                                    <p>First Name: <strong> {user.firstName} </strong></p>
                                    <p>Last Name: <strong> {user.lastName} </strong></p>
                                    <p>Username: <strong> {user.username} </strong></p>
                                    <p>Email: <strong> {user.email}</strong></p>
                                    <p>About me: <strong> {user.description}</strong></p>
                                    <p>Joined: <strong> {new Date(user.createdAt).toUTCString()}</strong></p>
                                    {user.createdAt !== user.updatedAt && user.updatedAt && <p>Last updated: <strong> {new Date(user.updatedAt).toUTCString()}</strong></p>}
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