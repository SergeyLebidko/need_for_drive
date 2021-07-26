import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {lang, city, sliderData, tabItemsData} from './reducers';

let combinedReducer = combineReducers({lang, city, sliderData, tabItemsData});
const store = createStore(combinedReducer, {}, applyMiddleware(thunk));
export default store;