import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import useOverlay from '../../hooks/useOverlay';

import Skeleton from '../skeleton/Skeleton';
import CommentsList from './CommentsList';
import AuthorPreview from './AuthorPreview';
import Overlay from '../overlay/Overlay';
import Spinner from '../spinner/Spinner';
import Like from './Like';

import * as postService from '../../service/post';
import * as commentService from '../../service/comment';
import * as likeService from '../../service/like';

import { userAction } from '../../const/actions';
import { postReducer } from '../../reducers/postReducer';

export default function Post() {
    const { postId } = useParams('postId');
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [action, setAction] = useOverlay();

    const [post, dispatch] = useReducer(postReducer, null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        Promise.all([
            postService.getPostById(postId),
            commentService.getCommentsByPostId(postId),
            likeService.getLikesByPostId(postId)
        ])
            .then((result) => {

                const [currentPost, comments, likes] = result;

                dispatch({
                    type: 'LOAD_POST',
                    payload: { ...currentPost, comments: comments.results, likes: likes.results }
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, [postId]);

    useEffect(() => {
        if (confirm) {

            Promise.all([
                postService.deletePost(postId),
                post.likes.forEach(l => likeService.removeLike(l.objectId)),
                post.comments.forEach(c => commentService.removeComment(c.objectId))
            ])
                .then(() => {
                    setAction(userAction.close);
                    setLoading(loading => !loading);
                    setConfirm(false);
                    navigate('/posts');
                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                    setLoading(loading => !loading);
                });
        }
    }, [confirm, navigate, postId, setAction, post?.comments, post?.likes]);

    const onDelete = () => {
        setAction(userAction.confirm);
    }

    const isUser = user && user.objectId !== post?.author.objectId;
    const isAuthor = user && user.objectId === post?.author.objectId;

    const confirmAction = {
        action: () => {
            setConfirm(true);
            setLoading(true);
        },
        text: 'Are you sure you want to delete this article?'
    }

    if (!post) {
        return <Skeleton />
    }

    return (
        <div className="wrap full-wrap post">

            {action && <Overlay action={action} setAction={setAction} confirmAction={confirmAction} />}

            {loading && <Spinner />}

            <article className="post has-post-thumbnail">
                <span className="post-image details">
                    <img src={post.picture.url} alt="post" />
                </span>
                <div className="inner">
                    <h1 className="entry-title">{post.title}</h1>
                    <ul className="meta top">
                        <li className="time">
                            <time className="post-date created" dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                        </li>
                        <li className="comments post-tags">
                            <a href="#comments">{post.comments.length} Comment{post.comments.length !== 1 && 's'}</a>
                        </li>
                        <li className="likes post-tags">
                            <span>{post.likes.length} Like{post.likes.length !== 1 && 's'}</span>
                        </li>
                        <li className="author-m post-tags">
                            <a href="#author">By {post.author.firstName} {post.author.lastName}</a>
                        </li>
                    </ul>
                    <div className="post-content">

                        {post.text.split('\n').map((el, i) => <p key={i + Math.random() * 10000}>{el.trim()}</p>)}

                    </div>

                    {isUser &&
                        <Like dispatch={dispatch} post={post} />
                    }

                    {isAuthor &&
                        <div className="author-controls">
                            <Link to={`/posts/${postId}/edit`} className="button small green">Edit</Link>
                            <button className="button small red" onClick={onDelete}>Delete</button>
                        </div>
                    }

                </div>
            </article>

            <AuthorPreview author={post.author} />

            <CommentsList comments={post.comments} dispatch={dispatch} isAuthor={isAuthor} />
        </div>
    );
}