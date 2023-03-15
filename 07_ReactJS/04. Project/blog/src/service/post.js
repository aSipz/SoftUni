import { del, get, post, put } from './api.js';
import { createPointer } from '../utils/serviceUtils';

const endpoints = {
    'createPost': '/classes/Post',
    'recent': '/classes/Post?order=-createdAt&limit=6',
    'pagination': (step, skip, search) => {
        return `/classes/Post?order=-createdAt&limit=${step}&skip=${skip}&include=author&count=1${search ? '&where=' + search : ''}`
    },
    'getPostById': (postId) => '/classes/Post/' + postId + '?include=author',
    'post': (postId) => '/classes/Post/' + postId
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

export function updatePost(postId, postData) {
    return put(endpoints.post(postId), postData);
}

export function getPosts(step, skip, search) {
    return get(endpoints.pagination(step, skip, search));
}