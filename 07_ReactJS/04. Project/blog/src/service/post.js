import { del, get, post, put } from './api.js';
import { createPointer, encodeObject, filterRelation } from './helpers';

const endpoints = {
    'createPost': '/classes/Post',
}

export function createPost(postData, authorId) {
    const author = createPointer('_User', authorId);
    return post(endpoints.createPost, { ...postData, author });
}