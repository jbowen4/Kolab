//basically just boilerplate. most store files look the same
// you don't have to look at this file ever again
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';  //middleware
import rootReducer from './reducers';  //multiple reducers (auth, profile, etc)

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
