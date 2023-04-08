import './CreatePost.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import useFileUpload from '../../hooks/useFileUpload';
import { AuthContext } from "../../contexts/AuthContext";

import { onChangeHandler, lengthValidation, onFocusHandler } from '../../utils/inputUtils';
import * as postService from '../../service/post';
import { fileUpload } from '../../service/api';

export default function CreatePost() {
    const { postId } = useParams();

    const [formValues, setFormValues] = useState({
        title: '',
        text: '',
        picture: null
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(() => postId ? true : false);
    const [post, setPost] = useState(null);

    const [
        file,
        inputRef,
        disabled,
        handleClick,
        onCancelUpload,
        handleFileChange,
        handleFileUpload,
        fileDataURL
    ] = useFileUpload(changePostCover, removeFileError);

    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (postId) {
            postService.getPostById(postId)
                .then(result => {
                    const { title, text, picture } = result;
                    setPost(result);
                    setFormValues({ title, text, picture });
                    setErrors({ title: false, text: false, picture: false });

                    if (user.objectId !== result.author.objectId) {
                        navigate('/', { replace: true });
                    }

                })
                .catch(error => {
                    console.log(error);
                    if (error.message === 'Invalid session token') {
                        userLogout();
                    };
                    navigate('/');
                });

            setLoading(false);
        }

        if (!postId) {
            setPost(null);
            setFormValues({
                title: '',
                text: '',
                picture: null
            });
            onCancelUpload()
            setErrors({});
        }
    }, [postId, navigate, user, onCancelUpload, userLogout]);

    const onChange = onChangeHandler.bind(null, setFormValues, null);
    const onFocus = onFocusHandler.bind(null, setErrors);

    const titleValidator = lengthValidation.bind(null, setErrors, 5);
    const textValidator = lengthValidation.bind(null, setErrors, 20);

    function removeFileError() {
        setErrors(state => ({ ...state, 'picture': false }));
    }

    async function changePostCover() {
        try {
            const result = await fileUpload(file.type, `/parse/files/${file.name}`, file);
            setFormValues(state => ({ ...state, 'picture': { ...result, '__type': 'File' } }));
            removeFileError();
        } catch (error) {
            console.log(error);
            if (error.message === 'Invalid session token') {
                userLogout();
            };
        }
    }

    const onCancel = () => {
        navigate('/');
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(errors).length < Object.values(formValues).length
            || Object.values(errors).some(x => x)
            || (!post?.picture && !formValues.picture)) {
            setErrors(errors => {
                const newErrors = {};
                Object.keys(formValues).forEach(e => Object.hasOwn(errors, e)
                    ? Object.assign(newErrors, { [e]: errors[e] })
                    : Object.assign(newErrors, { [e]: true }));
                if (!post?.picture && !formValues.picture) {
                    newErrors.picture = true;
                }
                return newErrors;
            });
            return;
        }

        let hasChanges = false;

        post && Object.entries(formValues).forEach(([k, v]) => {
            if (post[k] !== v) {
                hasChanges = true;
            }
        });

        if (!hasChanges && post?.picture?.url === formValues.picture?.url) {
            navigate(`/posts/${postId}/details`);
            return;
        }

        setLoading(state => !state);

        try {
            const result = postId
                ? await postService.updatePost(postId, formValues)
                : await postService.createPost(formValues, user.objectId);

            navigate(`/posts/${postId ? postId : result.objectId}/details`);
        } catch (error) {
            console.log(error.message);
            if (error.message === 'Invalid session token') {
                userLogout();
            };
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
                            <h2>{postId ? 'Edit' : 'Create new post'}</h2>
                        </div>

                        <form onSubmit={onSubmit}>

                            <div className="image-upload">
                                <input
                                    accept="image/jpeg, image/png"
                                    type="file"
                                    ref={inputRef}
                                    hidden
                                    onChange={handleFileChange}
                                />
                                <p>Post cover preview:</p>

                                {fileDataURL
                                    ? <img src={fileDataURL} alt="post-cover" className="post-cover-image" />
                                    : formValues.picture
                                        ? <img src={formValues.picture.url} alt="post-cover" className="post-cover-image" />
                                        : null
                                }

                                <div>
                                    {file &&
                                        <button type='button' className='button red' onClick={onCancelUpload} disabled={disabled}>Cancel</button>
                                    }

                                    <button type='button' className='button upload' onClick={handleClick} disabled={disabled}>
                                        {file
                                            ? `${file.name} selected`
                                            : formValues.picture
                                                ? 'Change picture'
                                                : 'Upload picture'
                                        }
                                    </button>
                                    {file &&
                                        <button type='button' className='button green' onClick={handleFileUpload} disabled={disabled}>Upload picture</button>
                                    }
                                </div>

                                {errors.picture &&
                                    <p className="form-error">
                                        Post cover image is required!
                                    </p>
                                }
                            </div>

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
                                    onFocus={onFocus}
                                />
                                {errors.title &&
                                    <p className="form-error">
                                        Title should be at least 5 characters long!
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
                                    onFocus={onFocus}
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
                                <button type='submit' className="button green">{postId ? 'Update' : 'Post'}</button>
                            </div>

                        </form>

                    </div>
                </div>
            </article>
        </section>
    );
}