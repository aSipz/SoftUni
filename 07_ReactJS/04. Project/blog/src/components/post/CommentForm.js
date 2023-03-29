import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { lengthValidation, onChangeHandler } from '../../utils/inputUtils';
import { createPointer } from '../../utils/serviceUtils';

import * as commentService from '../../service/comment';

export default function CommentForm({ setLoading, dispatch, toggleCommentForm, comment }) {
    const { postId } = useParams('postId');

    const { user } = useContext(AuthContext);
    const [formValues, setFormValues] = useState(() => ({ text: comment ? comment.text : '' }));
    const [errors, setErrors] = useState({ text: false });

    const onChange = onChangeHandler.bind(null, setFormValues, null);

    const lengthValidator = lengthValidation.bind(null, setErrors, 10);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (errors.text) {
            return;
        }

        if (comment?.text && formValues.text === comment.text) {
            toggleCommentForm();
            return;
        }

        setLoading(loading => !loading);

        try {
            const result = comment
                ? await commentService.updateComment(formValues, comment.objectId)
                : await commentService.createComment(formValues, postId, user.objectId);

            if (comment) {
                dispatch({
                    type: 'UPDATE_COMMENT',
                    payload: { ...comment, ...result, text: formValues.text },
                });
            } else {
                result.owner = { ...createPointer('_User', user.objectId), firstName: user.firstName, lastName: user.lastName };
                result.text = formValues.text;
                result.updatedAt = result.createdAt;

                dispatch({
                    type: 'ADD_COMMENT',
                    payload: result,
                });
            }

            toggleCommentForm();
        } catch (error) {
            console.log(error);
        }

        setLoading(loading => !loading);

    }

    return (
        <form className='comment' onSubmit={onSubmit}>
            <label htmlFor="comment">Comment</label>
            <textarea
                className={errors.text ? "error" : ""}
                id="comment"
                name="text"
                cols={45}
                rows={8}
                placeholder="Your comment here"
                value={formValues.text}
                onChange={onChange}
                onBlur={lengthValidator}
            />

            <div>
                {errors.text &&
                    <p className="form-error">
                        Comment should be at least 10 characters long!
                    </p>
                }
                <p className="form-submit"><button type="button" className="button red" onClick={toggleCommentForm}>Cancel</button></p>
                <p className="form-submit"><button type='submit' className="button green">{comment ? 'Update' : 'Post Comment'}</button></p>
            </div>
        </form>
    );
}