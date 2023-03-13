import { del, get, post } from './api.js';
import { createPointer, encodeObject, filterRelation } from '../utils/serviceUtils';

const endpoints = {
    'like': '/classes/Like',
    'getLikesByPostId': (postId) => '/classes/Like?where=' + encodeObject(filterRelation('post', 'Post', postId)) + '&include=owner',
}

export function createLike(postId, ownerId) {
    const article = createPointer('Post', postId);
    const owner = createPointer('_User', ownerId);
    return post(endpoints.like, { post: article, owner });
}

export function removeLike(likeId) {
    return del(endpoints.like + '/' + likeId);
}

export function getLikesByPostId(postId) {
    return get(endpoints.getLikesByPostId(postId));
}