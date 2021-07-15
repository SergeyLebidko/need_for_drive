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