import { get, post } from "./api.js";

const endpoint = {
    likesById: (id) => `/data/likes?where=${encodeURIComponent(`recipeId="${id}"`)}&count`,
    likesByUserId: (id, userId) => `/data/likes?where=${encodeURIComponent(`_ownerId="${userId}" AND recipeId="${id}"`)}&count`,
    like: '/data/likes'
};

export async function getLikesById(id, userId) {
    const requests = [];
    requests.push(get(endpoint.likesById(id)));

    if (userId) {
        requests.push(endpoint.likesByUserId(id, userId));
    }

    const [likes, userLike] = await Promise.all(requests);

    return {
        likes,
        canLike: userLike == 0
    }
}

export async function like(id) {
    return await post(endpoint.like, {id});
}