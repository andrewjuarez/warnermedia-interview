const INITIAL_STATE = {
    results: [],
    success: null,
    loading: false,
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MOVIE_SEARCH_REQUEST':
            return { ...state, loading: true };
        case 'MOVIE_SEARCH_RESULTS':
            return { ...state, success: true, loading: false, results: action.results };
        case 'MOVIE_SEARCH_ERROR':
            return { ...state, success: false, loading: false, results: [] };
        default:
            return state;
    }
}

export default SearchReducer;