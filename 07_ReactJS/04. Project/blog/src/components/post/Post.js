import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import useOverlay from '../../hooks/useOverlay';

import Skeleton from '../skeleton/Skeleton';
import CommentsList from './CommentsList';
import AuthorPreview from './AuthorPreview';
import Overlay from '../overlay/Overlay';
import Spinner from '../spinner/Spinner';

import * as postService from '../../service/post';
import * as commentService from '../../service/comment';
import * as likeService from '../../service/like';

import { createPointer } from '../../utils/serviceUtils';
import { userAction } from '../../const/actions';

const postReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return action.payload;
        case 'DISLIKE':
            return { ...state, comments: [...state.comments], likes: state.likes.filter(x => x.objectId !== action.likeId) };
        case 'LIKE':
            return { ...state, comments: [...state.comments], likes: [...state.likes, action.payload] };
        case 'ADD_COMMENT':
            return { ...state, comments: [...state.comments, action.payload], likes: [...state.likes] };
        case 'DELETE_COMMENT':
            return { ...state, comments: state.comments.filter(x => x.objectId !== action.commentId), likes: [...state.likes] };
        case 'UPDATE_COMMENT':
            return { ...state, comments: state.comments.map(x => x.objectId !== action.payload.objectId ? x : action.payload), likes: [...state.likes] };
        default:
            return state;
    }
};

export default function Post() {
    const { postId } = useParams('postId');
    const navigate = useNavigate();

    const [likeDisabled, setLikeDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [act, setAct] = useOverlay();

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

                const action = {
                    type: 'LOAD_POST',
                    payload: { ...currentPost, comments: comments.results, likes: likes.results }
                };

                dispatch(action);
            })
            .catch(error => {
                console.log(error);
            });
    }, [postId]);

    useEffect(() => {
        if (confirm) {

            postService.deletePost(postId)
                .then(() => {
                    setAct(userAction.close);
                    navigate('/posts');
                })
                .catch(error => {
                    console.log(error);
                    setConfirm(false);
                })

            setLoading(loading => !loading);
        }
    }, [confirm]);

    const onLike = async () => {

        setLikeDisabled(state => !state);

        try {
            const result = await likeService.createLike(postId, user.objectId);

            result.owner = createPointer('_User', user.objectId);

            const action = {
                type: 'LIKE',
                payload: result,
            };

            dispatch(action);
        } catch (error) {
            console.log(error);
        }

        setLikeDisabled(state => !state);

    }

    const onDislike = async () => {
        const likeId = post.likes.find(x => x.owner.objectId === user.objectId).objectId;

        setLikeDisabled(state => !state);

        try {
            await likeService.removeLike(likeId);

            const action = {
                type: 'DISLIKE',
                payload: {},
                likeId
            };

            dispatch(action);
        } catch (error) {
            console.log(error);
        }

        setLikeDisabled(state => !state);

    }

    const onDelete = () => {
        setAct(userAction.confirm);
    }

    const isUser = user && user.objectId !== post?.author.objectId;
    const isAuthor = user && user.objectId === post?.author.objectId;
    const isLiked = post?.likes.some(x => x.owner.objectId === user.objectId);

    const confirmAction = {
        action: () => setConfirm(true),
        loading: () => setLoading(true),
        text: 'Are you sure you want to delete this article?'
    }

    if (!post) {
        return <Skeleton />
    }

    return (
        <div className="wrap full-wrap post">

            {act && <Overlay action={act} setAction={setAct} confirmAction={confirmAction} />}

            {loading && <Spinner />}

            <article className="post has-post-thumbnail">
                <span className="post-image details">
                    <img src={post.imageUrl} alt="post" />
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

                        {post.text.split('\n').map((el, i) => <p key={i}>{el}</p>)}

                    </div>

                    {isUser &&
                        <div className="user-controls">
                            <button
                                className="button small blue"
                                onClick={isLiked ? onDislike : onLike}
                                disabled={likeDisabled}
                            >
                                {isLiked
                                    ? 'Liked'
                                    : <>Like<i className="fa-solid fa-thumbs-up" /></>}
                            </button>
                            <a href="#respond" className="button small blue">Comment</a>
                        </div>
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