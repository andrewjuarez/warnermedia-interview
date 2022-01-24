import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import appReducer from './Reducers/root.reducer';

// Create persisted reducer
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, appReducer);

// Create Redux store
const store = createStore(
    persistedReducer,
    compose( 
        applyMiddleware(reduxThunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;