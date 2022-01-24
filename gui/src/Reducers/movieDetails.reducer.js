const INITIAL_STATE = {
    details: {},
    success: null,
    loading: false,
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MOVIE_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'MOVIE_DETAILS_RESULTS':
            return { ...state, success: true, loading: false, details: action.details };
        case 'MOVIE_DETAILS_ERROR':
            return { ...state, success: false, loading: false, details: [] };
        default:
            return state;
    }
}

export default SearchReducer;