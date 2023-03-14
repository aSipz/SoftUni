import { del, get, post, put } from './api.js';
import { createPointer, encodeObject, filterRelation } from '../utils/serviceUtils';

const endpoints = {
    'createPost': '/classes/Post',
    'recent': '/classes/Post?order=-createdAt&limit=6',
    'getPostById': (postId) => '/classes/Post/' + postId + '?include=author',
    'post' : (postId) => '/classes/Post/' + postId
}

export function createPost(postData, authorId) {
    const author = createPointer('_User', authorId);
    return post(endpoints.createPost, { ...postData, author });
}

export function getRecent() {
    return get(endpoints.recent);
}

export function getPostById(postId) {
    return get(endpoints.getPostById(postId));
}

export function deletePost(postId) {
    return del(endpoints.post(postId));
}