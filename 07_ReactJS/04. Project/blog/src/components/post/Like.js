import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as likeService from '../../service/like';
import { createPointer } from '../../utils/serviceUtils';

export default function Like({ dispatch, post }) {

    const [likeDisabled, setLikeDisabled] = useState(false);

    const { postId } = useParams('postId');

    const { user } = useContext(AuthContext);

    const onLike = async () => {

        setLikeDisabled(state => !state);

        try {
            const result = await likeService.createLike(postId, user.objectId);

            result.owner = createPointer('_User', user.objectId);

            dispatch({
                type: 'LIKE',
                payload: result,
            });
        } catch (error) {
            console.log(error);
        }

        setLikeDisabled(state => !state);

    }

    const onDislike = async () => {
        const likeId = post.likes.find(x => x.owner.objectId === user?.objectId).objectId;

        setLikeDisabled(state => !state);

        try {
            await likeService.removeLike(likeId);

            dispatch({
                type: 'DISLIKE',
                payload: {},
                likeId
            });
        } catch (error) {
            console.log(error);
        }

        setLikeDisabled(state => !state);

    }

    const isLiked = post?.likes.some(x => x.owner.objectId === user?.objectId);

    return (
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
    )
}