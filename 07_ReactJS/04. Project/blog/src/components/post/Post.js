import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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

import { userAction } from '../../const/actions';

const postReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return action.payload;
        // case 'ADD_GAMES':
        //     return action.payload.map(x => ({ ...x, comments: [] }));
        // case 'ADD_GAME':
        //     return [...state, action.payload];
        // case 'FETCH_GAME_DETAILS':
        // case 'EDIT_GAME':
        //     return state.map(x => x._id === action.gameId ? action.payload : x);
        // case 'ADD_COMMENT':
        //     return state.map(x => x._id === action.gameId ? { ...x, comments: [...x.comments, action.payload] } : x);
        // case 'REMOVE_GAME':
        //     return state.filter(x => x._id !== action.gameId);
        default:
            return state;
    }
};

export default function Post() {
    const { postId } = useParams('postId');

    const [loading, setLoading] = useState(false);
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
                console.log(result);

                const [currentPost, comments, likes] = result;
                console.log(currentPost);
                console.log(comments);
                console.log(likes);
                console.log({ ...currentPost, comments: comments.results, likes: likes.results });
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

    const onLike = () => {
        likeService.createLike(postId, user.objectId)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const onDislike = () => {
        const likeId = post.likes.find(x => x.owner.objectId === user.objectId).objectId;
        likeService.removeLike(likeId)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const isUser = user && user.objectId !== post?.author.objectId;
    const isAuthor = user && user.objectId === post?.author.objectId;
    const isLiked = post?.likes.some(x => x.owner.objectId === user.objectId);

    if (!post) {
        return <Skeleton />
    }

    return (
        <div className="wrap full-wrap post">

            {action && <Overlay action={action} setAction={setAction} />}

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
                            <button className="button small blue" onClick={isLiked ? onDislike : onLike}>
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
                            <button className="button small red">Delete</button>
                        </div>
                    }

                </div>
            </article>

            <AuthorPreview author={post.author} />

            <CommentsList comments={post.comments} />
        </div>
    );
}