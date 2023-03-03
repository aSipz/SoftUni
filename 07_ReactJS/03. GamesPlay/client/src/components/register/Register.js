import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as userService from '../../service/userService';

export default function Register() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        'confirm-password': ''
    });

    const { userLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    function changeHandler(e) {
        setFormValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        if (formValues.password !== formValues['confirm-password']) {
            return;
        }

        const { email, password } = formValues;

        userService.register({ email, password })
            .then(result => {
                userLogin(result);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        value={formValues['confirm-password']}
                        onChange={changeHandler}
                    />
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}