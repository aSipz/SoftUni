import './CreatePost.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import { AuthContext } from "../../contexts/AuthContext";

import { onChangeHandler, lengthValidation, urlValidation } from '../../utils/inputUtils';
import * as postService from '../../service/post';

export default function CreatePost() {
    const [formValues, setFormValues] = useState({
        title: '',
        text: '',
        imageUrl: '',
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onChange = onChangeHandler.bind(null, setFormValues);

    const titleValidator = lengthValidation.bind(null, setErrors, 5);
    const textValidator = lengthValidation.bind(null, setErrors, 20);
    const urlValidator = urlValidation.bind(null, setErrors);

    const onCancel = () => {
        navigate('/');
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

        setLoading(state => !state);

        try {
            const result = await postService.createPost(formValues, user.objectId);
            navigate(`/posts/${result.objectId}/details`);
        } catch (error) {
            console.log(error.message);
            setServerError(error.message);
        };

        setLoading(state => !state);
    }

    return (
        <section className="main">

            {loading && <Spinner />}

            <article className="post page">
                <div className="inner">
                    <div className="create-post">
                        <div className="post-header">
                            <h2>Create new post</h2>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className='wrapper'>
                                <label htmlFor="title">Title:</label>
                                <input
                                    className={errors.title ? "error" : ""}
                                    id='title'
                                    name="title"
                                    type="text"
                                    value={formValues.title}
                                    onChange={onChange}
                                    onBlur={titleValidator}
                                />
                                {errors.title &&
                                    <p className="form-error">
                                        Title should be at least 5 characters long!
                                    </p>
                                }
                            </div>

                            <div className='wrapper'>
                                <label htmlFor="imageUrl">Post cover URL:</label>
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
                                <label htmlFor="text">Text:</label>
                                <textarea
                                    className={errors.text ? "error" : ""}
                                    id='text'
                                    cols="40"
                                    rows="15"
                                    name="text"
                                    type="text"
                                    value={formValues.text}
                                    onChange={onChange}
                                    onBlur={textValidator}
                                />
                                {errors.text &&
                                    <p className="form-error">
                                        Text should be at least 20 characters long!
                                    </p>
                                }
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={onCancel}>Cancel</button>
                                {serverError &&
                                    <p className="server-error">
                                        {serverError}
                                    </p>
                                }
                                <button type='submit' className="button green">Post</button>
                            </div>

                        </form>
                    </div>
                </div>
            </article>
        </section>
    );
}