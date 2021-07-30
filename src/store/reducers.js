import {RUS} from '../settings';
import * as act from './actions';

export function lang(state = RUS, action) {
    switch (action.type) {
        case act.SET_LANG:
            return action.lang;
        default:
            return state;
    }
}

export function city(state = null, action) {
    switch (action.type) {
        case act.SET_CITY:
            return action.city;
        default:
            return state;
    }
}

export function sliderData(state = [], action) {
    switch (action.type) {
        case act.SET_SLIDER_DATA:
            return action.sliderData;
        default:
            return state;
    }
}

export function tabItemsData(state = [], action) {
    switch (action.type) {
        case act.SET_TAB_ITEMS_DATA:
            return action.tabItemsData;
        default:
            return state;
    }
}

export function categoryList(state = [], action) {
    switch (action.type) {
        case act.SET_CATEGORY_LIST:
            return action.categoryList;
        default:
            return state;
    }
}

export function modelList(state = [], action) {
    switch (action.type) {
        case act.SET_MODEL_LIST:
            return action.modelList;
        default:
            return state;
    }
}

export function colorList(state = [], action) {
    switch (action.type) {
        case act.SET_COLOR_LIST:
            return action.colorList;
        default:
            return state;
    }
}