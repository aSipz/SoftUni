import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Spinner from '../spinner/Spinner';
import { onChangeHandler, lengthValidation, emailValidation, urlValidation } from '../../utils/inputUtils';
import * as userService from '../../service/user';

export default function EditProfile({ onClose }) {
    const { user, userLogin } = useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        imageUrl: user.imageUrl,
        description: user.description,
    });
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        imageUrl: false,
    });
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const onChange = onChangeHandler.bind(null, setFormValues);

    const lengthValidator = lengthValidation.bind(null, setErrors, 3);
    const emailValidator = emailValidation.bind(null, setErrors);
    const urlValidator = urlValidation.bind(null, setErrors);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(errors).length < Object.keys(formValues).filter(e => e !== 'description').length || Object.values(errors).some(x => x)) {
            setErrors(errors => {
                const newErrors = {};
                Object.keys(formValues).forEach(e => Object.hasOwn(errors, e) ? Object.assign(newErrors, { [e]: errors[e] }) : Object.assign(newErrors, { [e]: true }));
                return newErrors;
            });
            return;
        }

        setLoading(loading => !loading);

        try {
            const result = await userService.updateUser(user.objectId, formValues);
            userLogin(Object.assign({}, user, formValues, result));
            onClose();
        } catch (error) {
            setServerError(error.message);
        }

        setLoading(loading => !loading);

    }
    return (
        <div className="edit-profile">

            {loading && <Spinner />}

            <div className="profile-header">
                <h2>Edit profile</h2>
            </div>

            <form onSubmit={onSubmit}>
                <div className='wrapper'>
                    <label htmlFor="firstName">First name:</label>
                    <input
                        className={errors.firstName ? "error" : ""}
                        id='firstName'
                        name="firstName"
                        type="text"
                        value={formValues.firstName}
                        onChange={onChange}
                        onBlur={lengthValidator}
                    />
                    {errors.firstName &&
                        <p className="form-error">
                            First name should be at least 3 characters long!
                        </p>
                    }
                </div>

                <div className='wrapper'>
                    <label htmlFor="lastName">Last name:</label>
                    <input
                        className={errors.lastName ? "error" : ""}
                        id='lastName'
                        name="lastName"
                        type="text"
                        value={formValues.lastName}
                        onChange={onChange}
                        onBlur={lengthValidator}
                    />
                    {errors.lastName &&
                        <p className="form-error">
                            Last name should be at least 3 characters long!
                        </p>
                    }
                </div>

                <div className='wrapper'>
                    <label htmlFor="username">Last name:</label>
                    <input
                        className={errors.username ? "error" : ""}
                        id='username'
                        name="username"
                        type="text"
                        value={formValues.username}
                        onChange={onChange}
                        onBlur={lengthValidator}
                    />
                    {errors.username &&
                        <p className="form-error">
                            Username should be at least 3 characters long!
                        </p>
                    }
                </div>

                <div className='wrapper'>
                    <label htmlFor="user-email">Email:</label>
                    <input
                        className={errors.email ? "error" : ""}
                        id='user-email'
                        name="email"
                        type="text"
                        value={formValues.email}
                        onChange={onChange}
                        onBlur={emailValidator}
                    />
                    {errors.email &&
                        <p className="form-error">
                            Email is not valid!
                        </p>
                    }
                </div>

                <div className='wrapper'>
                    <label htmlFor="imageUrl">Profile picture URL:</label>
                    <input
                        className={errors.imageUrl ? "error" : ""}
                        id='imageUrl'
                        name="imageUrl"
                        type="text"
                        value={formValues.imageUrl}
                        onChange={onChange}
                        onBlur={urlValidator}
                    />
                    {errors.imageUrl &&
                        <p className="form-error">
                            ImageUrl is not valid!
                        </p>
                    }
                </div>

                <div className='wrapper'>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id='description'
                        cols="40"
                        rows="10"
                        name="description"
                        type="text"
                        value={formValues.description}
                        onChange={onChange}
                    />
                </div>

                <div className="form-actions">
                    <button type="button" onClick={onClose}>Cancel</button>
                    {serverError &&
                        <p className="server-error">
                            {serverError}
                        </p>
                    }
                    <button type='submit' className="button green">Update</button>
                </div>

            </form>
        </div>
    );
}