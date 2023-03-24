export const postReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return action.payload;
        case 'DISLIKE':
            return { ...state, comments: [...state.comments], likes: state.likes.filter(x => x.objectId !== action.likeId) };
        case 'LIKE':
            return { ...state, comments: [...state.comments], likes: [...state.likes, action.payload] };
        case 'ADD_COMMENT':
            return { ...state, comments: [...state.comments, action.payload], likes: [...state.likes] };
        case 'DELETE_COMMENT':
            return { ...state, comments: state.comments.filter(x => x.objectId !== action.commentId), likes: [...state.likes] };
        case 'UPDATE_COMMENT':
            return { ...state, comments: state.comments.map(x => x.objectId !== action.payload.objectId ? x : action.payload), likes: [...state.likes] };
        default:
            return state;
    }
};