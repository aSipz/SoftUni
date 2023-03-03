import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as userService from '../../service/userService';

export default function Login() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const { userLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    function changeHandler(e) {
        setFormValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        userService.login(formValues)
            .then(result => {
                userLogin(result);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}