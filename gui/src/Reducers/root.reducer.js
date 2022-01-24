import { combineReducers } from 'redux';

import searchReducer from './search.reducer';
import movieDetailsReducer from './movieDetails.reducer';

const rootReducer = combineReducers({
    search: searchReducer,
    movieDetails: movieDetailsReducer
});

export default rootReducer;