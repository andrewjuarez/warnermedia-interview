import axios from 'axios';

export const getMovieDetails = (id) => (dispatch) => {
    dispatch({ type: 'MOVIE_DETAILS_REQUEST' });
    axios.get(`http://localhost:5000/api/film/details/${id}`)
        .then(response => {
            if (response?.data?.success) {
                dispatch({ type: 'MOVIE_DETAILS_RESULTS', details: response.data.details });
            } else {
                dispatch({ type: 'MOVIE_DETAILS_ERROR' });
            }
        })
        .catch(error => {
            console.error(error);
            dispatch({ type: 'MOVIE_DETAILS_ERROR' });
        })
}