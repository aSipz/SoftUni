import { useContext, useEffect, useState } from 'react';
import { userAction } from '../../const/actions';

import { AuthContext } from '../../contexts/AuthContext';
import useOverlay from '../../hooks/useOverlay';

import Overlay from '../overlay/Overlay';

import * as commentService from '../../service/comment';
import CommentForm from './CommentForm';

export default function Comment({ comment, dispatch, setLoading }) {
    const { user } = useContext(AuthContext);
    const [confirm, setConfirm] = useState(false);
    const [edit, setEdit] = useState(false);
    const [action, setAction] = useOverlay();

    const { userLogout } = useContext(AuthContext);

    useEffect(() => {
        if (confirm) {

            commentService.removeComment(comment.objectId)
                .then(() => {
                    setAction(userAction.close);

                    dispatch({
                        type: 'DELETE_COMMENT',
                        payload: {},
                        commentId: comment.objectId
                    });
                    setLoading(false);
                    setConfirm(false);
                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                    setLoading(false);
                    if (error.message === 'Invalid session token') {
                        userLogout();
                    };
                });
        }
    }, [confirm, dispatch, setLoading, setAction, comment, userLogout]);

    const isOwner = user?.objectId === comment.owner.objectId;

    const toggleCommentForm = () => {
        setEdit(state => !state);
    }

    const onDelete = () => {
        setAction(userAction.confirm);
    }

    const confirmAction = {
        action: () => {
            setConfirm(true);
            setLoading(true);
        },
        text: 'Are you sure you want to delete this comment?'
    }

    return (
        <>
            <blockquote>

                {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

                <p>{comment.text}<cite>{comment.owner.firstName} {comment.owner.lastName}</cite></p>
                <span>{comment.createdAt !== comment.updatedAt ?
                    `Edited: ${new Date(comment.updatedAt).toUTCString()}`
                    : new Date(comment.createdAt).toUTCString()}</span>
                {isOwner && !edit &&
                    <>
                        <button className="button small green" onClick={toggleCommentForm}>Edit</button>
                        <button className="button small red" onClick={onDelete}>Delete</button>
                    </>
                }

            </blockquote>

            {edit && <CommentForm setLoading={setLoading} dispatch={dispatch} toggleCommentForm={toggleCommentForm} comment={comment} />}
        </>
    )
}