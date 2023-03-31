import { useContext, useState } from 'react';

import { userAction } from '../../const/actions';
import { AuthContext } from '../../contexts/AuthContext';

import { onChangeHandler, lengthValidation } from '../../utils/inputUtils';
import * as messageService from '../../service/message';

export default function SendMessage({ setAction, confirmAction }) {
    const [formValues, setFormValues] = useState({ message: '' });
    const [errors, setErrors] = useState({});

    const { user } = useContext(AuthContext);
    const { text, receiver, action } = confirmAction;

    const onChange = onChangeHandler.bind(null, setFormValues, null);

    const lengthValidator = lengthValidation.bind(null, setErrors, 10);

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

        action();

        try {
            await messageService.sendMessage(formValues, user.objectId, receiver.objectId);
            setAction(userAction.default);
        } catch (error) {
            console.log(error);
        }

        action();
    }

    return (
        <div className="user-container">

            <header className="headers">
                <h2>{text}</h2>
                <button className="btn close" onClick={() => setAction(userAction.close)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </header>

            <form onSubmit={onSubmit}>

                <div className='message'>
                    <div className='wrapper'>
                        <textarea
                            className={errors.message ? "error" : ""}
                            placeholder="Your message here"
                            cols="40"
                            rows="10"
                            name="message"
                            type="text"
                            value={formValues.message}
                            onChange={onChange}
                            onBlur={lengthValidator}
                        />
                        {errors.message &&
                            <p className="form-error">
                                Message should be at least 10 characters long!
                            </p>
                        }
                    </div>
                </div>

                <div className="form-actions">
                    <button type="button" className="button red submit" onClick={() => setAction(userAction.close)}>Cancel</button>
                    <button type="submit" className="submit" >Send</button>
                </div>
            </form>
        </div>
    );
}