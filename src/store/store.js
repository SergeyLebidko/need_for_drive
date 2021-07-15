import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {lang} from './reducers';

let combinedReducer = combineReducers({lang});
const store = createStore(combinedReducer, {}, applyMiddleware(thunk));
export default store;