import { del, get, post, put } from './api.js';
import { createPointer, encodeObject, filterRelation } from '../utils/serviceUtils';

const endpoints = {
    'sendMessage': '/classes/Message',
    'getUnreadMessagesByReceiver': (receiverId) => {
        return '/classes/Message?where=' + encodeObject({ ...filterRelation('receiver', '_User', receiverId), 'read': false }) + '&limit=0&count=1'
    },
    'getCommentsByPostId': (postId) => '/classes/Comment?where=' + encodeObject(filterRelation('post', 'Post', postId)) + '&include=owner',
    'createPost': '/classes/Post',
    'recent': '/classes/Post?order=-createdAt&limit=6',
    'pagination': (step, skip, search) => {
        return `/classes/Post?order=-createdAt&limit=${step}&skip=${skip}&include=author&count=1${search ? '&where=' + search : ''}`
    },
    'getPostById': (postId) => '/classes/Post/' + postId + '?include=author',
    'post': (postId) => '/classes/Post/' + postId
}

export function sendMessage(msgData, senderId, receiverId) {
    const sender = createPointer('_User', senderId);
    const receiver = createPointer('_User', receiverId);
    return post(endpoints.sendMessage, { ...msgData, sender, receiver });
}

export function getUnread(receiverId) {
    return get(endpoints.getUnreadMessagesByReceiver(receiverId));
}
// export function createPost(postData, authorId) {
//     const author = createPointer('_User', authorId);
//     return post(endpoints.createPost, { ...postData, author });
// }

// export function getRecent() {
//     return get(endpoints.recent);
// }

// export function getPostById(postId) {
//     return get(endpoints.getPostById(postId));
// }

// export function deletePost(postId) {
//     return del(endpoints.post(postId));
// }

// export function updatePost(postId, postData) {
//     return put(endpoints.post(postId), postData);
// }

// export function getPosts(step, skip, search) {
//     return get(endpoints.pagination(step, skip, search));
// }