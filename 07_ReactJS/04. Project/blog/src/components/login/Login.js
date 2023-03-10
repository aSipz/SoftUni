import { useContext, useState } from "react";

import Spinner from '../spinner/Spinner';

import { ActionContext } from "../../contexts/ActionContext";
import { AuthContext } from '../../contexts/AuthContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import useCloseModal from "../../hooks/useCloseModal";

import { userAction } from '../../const/actions';
import { onChangeHandler, lengthValidation, emailValidation } from '../../utils/inputUtils';
import * as userService from '../../service/user';

export default function Login() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    const { changeAction } = useContext(ActionContext);
    const { userLogin } = useContext(AuthContext);
    const { loading, changeLoading } = useContext(LoadingContext);

    const [closeModalHandler] = useCloseModal();

    const onChange = onChangeHandler.bind(null, setFormValues);

    const lengthValidator = lengthValidation.bind(null, setErrors, 3);
    const emailValidator = emailValidation.bind(null, setErrors);

    const onRegisterClick = () => {
        changeAction(userAction.register);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).length < Object.values(formValues).length || Object.values(errors).some(x => x)) {
            setErrors(errors => {
                const newErrors = {};
                Object.keys(formValues).forEach(e => Object.hasOwn(errors, e) ? Object.assign(newErrors, { [e]: errors[e] }) : Object.assign(newErrors, { [e]: true }));
                return newErrors;
            });
            return;
        }

        changeLoading();

        userService.login(formValues)
            .then((result) => {
                userLogin(result);
                userService.getUserRole(result.objectId)
                    .then(res => {
                        const roles = res.results.map(e => e.name);
                        userLogin({...result, roles});
                    })
                    .catch(e => console.log(e));
                closeModalHandler();
                changeLoading();
            })
            .catch((err) => {
                setServerError(err.message);
                changeLoading();
            })
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

                <button className="btn close" onClick={closeModalHandler}>
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