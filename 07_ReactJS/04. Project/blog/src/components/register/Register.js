import { useContext, useState } from 'react';

import Spinner from '../spinner/Spinner';
import { AuthContext } from '../../contexts/AuthContext';

import { userAction } from '../../const/actions';
import { onChangeHandler, lengthValidation, emailValidation, urlValidation, repassValidation } from '../../utils/inputUtils';
import * as userService from '../../service/user';

export default function Login({setAction}) {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repass: '',
        imageUrl: '',
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const { userLogin } = useContext(AuthContext);

    const onChange = onChangeHandler.bind(null, setFormValues, null);

    const lengthValidator = lengthValidation.bind(null, setErrors, 3);
    const emailValidator = emailValidation.bind(null, setErrors);
    const urlValidator = urlValidation.bind(null, setErrors);
    const repassValidator = repassValidation.bind(null, setErrors, formValues.password, formValues.repass);

    const onLoginClick = () => {
        setAction(userAction.login);
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

        const { repass, ...userData } = formValues;

        try {
            const result = await userService.register(userData);

            userLogin(Object.assign({}, userData, result));

            await userService.addUserRole(result.objectId);

            setAction(userAction.close);
        } catch (error) {
            setServerError(error.message);
        }

        setLoading(loading => !loading);
    }

    return (
        <div className="user-container register">

            {loading && <Spinner />}

            <header className="headers">
                <h2>Register</h2>

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

                <div className="form-row">
                    <div className="form-group">
                        <div className="input-wrapper">
                            <span className={errors.firstName ? "error" : ""}><i className="fa-solid fa-user"></i></span>
                            <input
                                className={errors.firstName ? "error" : ""}
                                name="firstName"
                                type="text"
                                placeholder="First name"
                                value={formValues.firstName}
                                onChange={onChange}
                                onBlur={lengthValidator}
                            />
                        </div>
                        {errors.firstName &&
                            <p className="form-error">
                                First name should be at least 3 characters long!
                            </p>
                        }
                    </div>
                    <div className="form-group">
                        <div className="input-wrapper">
                            <span className={errors.lastName ? "error" : ""}><i className="fa-solid fa-user"></i></span>
                            <input
                                className={errors.lastName ? "error" : ""}
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                value={formValues.lastName}
                                onChange={onChange}
                                onBlur={lengthValidator}
                            />
                        </div>
                        {errors.lastName &&
                            <p className="form-error">
                                Last name should be at least 3 characters long!
                            </p>
                        }
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <div className="input-wrapper">
                            <span className={errors.username ? "error" : ""}><i className="fa-solid fa-user"></i></span>
                            <input
                                className={errors.username ? "error" : ""}
                                name="username"
                                type="text"
                                placeholder="Username"
                                value={formValues.username}
                                onChange={onChange}
                                onBlur={lengthValidator}
                            />
                        </div>
                        {errors.username &&
                            <p className="form-error">
                                Username should be at least 3 characters long!
                            </p>
                        }
                    </div>
                    <div className="form-group">
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
                </div>

                <div className="form-row">
                    <div className="form-group">
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
                    <div className="form-group">
                        <div className="input-wrapper">
                            <span className={errors.repass ? "error" : ""}><i className="fa-solid fa-lock"></i></span>
                            <input
                                className={errors.repass ? "error" : ""}
                                name="repass"
                                type="password"
                                placeholder="Retype Password"
                                value={formValues.repass}
                                onChange={onChange}
                                onBlur={repassValidator}
                            />
                        </div>
                        {errors.repass &&
                            <p className="form-error">
                                Passwords doesn't match!
                            </p>
                        }
                    </div>
                </div>

                <div className="form-group long-line">
                    <div className="input-wrapper">
                        <span className={errors.imageUrl ? "error" : ""}><i className="fa-solid fa-image-portrait"></i></span>
                        <input
                            className={errors.imageUrl ? "error" : ""}
                            name="imageUrl"
                            type="text"
                            placeholder="Image Url"
                            value={formValues.imageUrl}
                            onChange={onChange}
                            onBlur={urlValidator}
                        />
                    </div>
                    {errors.imageUrl &&
                        <p className="form-error">
                            ImageUrl is not valid!
                        </p>
                    }
                </div>

                <div className="form-actions">
                    <div>
                        <p>Already have an account?</p>
                        <button type='button' className="form-actions btn" onClick={onLoginClick}>Login</button>
                    </div>
                    <button className="submit" type="submit">Register</button>
                </div>

            </form>
        </div >
    );
}