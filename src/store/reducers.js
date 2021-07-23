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