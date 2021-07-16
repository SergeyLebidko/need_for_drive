import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {lang, city} from './reducers';

let combinedReducer = combineReducers({lang, city});
const store = createStore(combinedReducer, {}, applyMiddleware(thunk));
export default store;