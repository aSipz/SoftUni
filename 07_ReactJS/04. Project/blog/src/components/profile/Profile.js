import './Profile.css';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import Spinner from '../spinner/Spinner';

import * as userService from '../../service/user';

export default function Profile() {
    const navigate = useNavigate();

    const { userLogout } = useContext(AuthContext);
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

    return (
        <section className="main">

            {loading && <Spinner />}

            <article className="post page">
                <div className="inner">
                    <div className="profile-header">
                        <h1>My profile</h1>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                    <div className="post-content">
                        <p>You can contact me using the following form :)</p>
                        <form id="fh5co_contact_form">
                            <p>
                                <input type="text" name="name" defaultValue size={40} placeholder="Name*" />
                            </p>
                            <p>
                                <input type="email" name="email" defaultValue size={40} placeholder="Email*" />
                            </p>
                            <p>
                                <textarea name="message" cols={40} rows={10} placeholder="Your Message" defaultValue={""} />
                            </p>
                            <p className="form-submit">
                                <button type='submit'>Send</button></p>
                        </form>
                    </div>
                </div>
            </article>
        </section>
    );
}