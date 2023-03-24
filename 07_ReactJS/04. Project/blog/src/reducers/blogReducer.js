export const blogControlReducer = (state, action) => {
    switch (action.type) {
        case 'SCROLL':
            return { ...state, loading: true, skip: action.payload.skip };
        case 'ERROR':
            return { ...state, loading: false, error: true };
        case 'LOAD_POSTS':
            return {
                ...state,
                ...action.payload,
                posts: [...state.posts, ...action.payload.posts.filter(p => !state.posts.some(e => e.objectId === p.objectId))]
            };
        case 'INITIAL_LOAD':
            return { ...state, ...action.payload }
        case 'SEARCH':
            return action.payload;
        default:
            return state;
    }
};