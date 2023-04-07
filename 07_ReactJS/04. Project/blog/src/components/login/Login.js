import { useContext, useState } from 'react';

import Spinner from '../spinner/Spinner';
import { AuthContext } from '../../contexts/AuthContext';

import { userAction } from '../../const/actions';
import { onChangeHandler, lengthValidation, emailValidation, onFocusHandler } from '../../utils/inputUtils';
import * as userService from '../../service/user';

export default function Login({ setAction }) {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const { userLogin, userLogout } = useContext(AuthContext);

    const onChange = onChangeHandler.bind(null, setFormValues, null);
    const onFocus = onFocusHandler.bind(null, setErrors);

    const lengthValidator = lengthValidation.bind(null, setErrors, 3);
    const emailValidator = emailValidation.bind(null, setErrors);

    const onRegisterClick = () => {
        setAction(userAction.register);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(errors).length < Object.values(formValues).length || Object.values(errors).some(x => x)) {
            setErrors(errors => {
                const newErrors = {};
                Object.keys(formValues).forEach(e => Object.hasOwn(errors, e) ? Object.assign(newErrors, { [e]: errors[e] }) : Object.assign(newErrors, { [e]: true }));
                return newErrors;
            });
            return;
        }

        setLoading(loading => !loading);

        try {
            const result = await userService.login(formValues);
            userLogin(result);
            const roleResult = await userService.getUserRole(result.objectId);
            const roles = roleResult.results.map(e => e.name);
            userLogin({ ...result, roles });
            setAction(userAction.default);
        } catch (error) {
            setServerError(error.message);
            if (error.message === 'Invalid session token') {
                userLogout();
            };
        }

        setLoading(loading => !loading);

    }

    return (
        <div className="user-container login">

            {loading && <Spinner />}

            <header className="headers">
                <h2>Login</h2>

                {serverError &&
                    <p className="server-error">
                        {serverError}
                    </p>
                }

                <button className="btn close" onClick={() => setAction(userAction.close)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </header>

            <form onSubmit={onSubmit}>
                <div className="form-group long-line">

                    <div className="input-wrapper">
                        <span className={errors.email ? "error" : ""}><i className="fa-solid fa-envelope"></i></span>
                        <input
                            className={errors.email ? "error" : ""}
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={onChange}
                            onBlur={emailValidator}
                            onFocus={onFocus}
                        />
                    </div>
                    {errors.email &&
                        <p className="form-error">
                            Email is not valid!
                        </p>
                    }

                </div>

                <div className="form-group long-line">

                    <div className="input-wrapper">
                        <span className={errors.password ? "error" : ""}><i className="fa-solid fa-lock"></i></span>
                        <input
                            className={errors.password ? "error" : ""}
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={onChange}
                            onBlur={lengthValidator}
                            onFocus={onFocus}
                        />
                    </div>
                    {errors.password &&
                        <p className="form-error">
                            Password should be at least 3 characters long!
                        </p>
                    }
                </div>

                <div className="form-actions">
                    <div>
                        <p>Don't have an account?</p>
                        <button type="button" className="form-actions btn" onClick={onRegisterClick}>Register</button>
                    </div>
                    <button className="submit" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}