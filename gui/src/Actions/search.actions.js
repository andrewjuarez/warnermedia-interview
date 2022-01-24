import axios from 'axios';

export const searchMovies = (query) => (dispatch) => {
    dispatch({ type: 'MOVIE_SEARCH_REQUEST' });
    axios.get('http://localhost:5000/search', { params: { title: query } })
        .then(response => {
            console.log(response)
            if (response?.data?.success) {
                dispatch({ type: 'MOVIE_SEARCH_RESULTS', results: response.data.movies });
            } else {
                dispatch({ type: 'MOVIE_SEARCH_ERROR' });
            }
        })
        .catch(error => {
            console.error(error);
            dispatch({ type: 'MOVIE_SEARCH_ERROR' });
        })
}