import './CommentsList.css';

import { useState } from 'react';

import Spinner from '../spinner/Spinner';

import Comment from './Comment';
import CommentForm from './CommentForm';

export default function CommentsList({ comments, dispatch, isAuthor }) {
    const [comment, setComment] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleCommentForm = () => {
        setComment(state => !state);
    }

    return (
        <div className="comments-wrapper">

            {loading && <Spinner />}

            <div id="comments" className="inner">
                <div className="comments-inner">
                    <h3 id="respond-title">Comments ({comments.length})</h3>
                </div>
                <div className="comments">

                    {comments.map(c => <Comment key={c.objectId} comment={c} dispatch={dispatch} setLoading={setLoading}/>)}

                </div>

                {!isAuthor &&
                    <div id='respond' className="comment-respond" >

                        {!comment
                            ? <button className="button small blue" onClick={toggleCommentForm}>Add comment</button>
                            : <>
                                <h3 id="reply-title" className="comment-reply-title">Leave a comment </h3>
                                <CommentForm setLoading={setLoading} dispatch={dispatch} toggleCommentForm={toggleCommentForm} />
                            </>
                        }

                    </div>}

            </div>
        </div>
    );
}