import { del, get, post, put } from './api.js';
import { createPointer, encodeObject, filterRelation } from '../utils/serviceUtils';

const endpoints = {
    'comment': '/classes/Comment',
    'getCommentsByPostId': (postId) => '/classes/Comment?where=' + encodeObject(filterRelation('post', 'Post', postId)) + '&include=owner',
}

export function createComment(commentData, postId, ownerId) {
    const article = createPointer('Post', postId);
    const owner = createPointer('_User', ownerId);
    return post(endpoints.comment, { ...commentData, post: article, owner });
}

export function updateComment(commentData, commentId) {
    return put(endpoints.comment + '/' + commentId, { ...commentData });
}

export function removeComment(commentId) {
    return del(endpoints.comment + '/' + commentId);
}

export function getCommentsByPostId(postId) {
    return get(endpoints.getCommentsByPostId(postId));
}