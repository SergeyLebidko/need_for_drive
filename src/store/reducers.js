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

export function rateList(state = [], action) {
    switch (action.type) {
        case act.SET_RATE_LIST:
            return action.rateList;
        default:
            return state;
    }
}

export function optionList(state = [], action) {
    switch (action.type) {
        case act.SET_OPTION_LIST:
            return action.optionList;
        default:
            return state;
    }
}

export function hasModalShow(state = false, action) {
    switch (action.type) {
        case act.SHOW_MODAL:
            return true;
        case act.HIDE_MODAL:
            return false;
        default:
            return state;
    }
}

export function cityList(state = [], action) {
    switch (action.type) {
        case act.SET_CITY_LIST:
            return action.cityList;
        default:
            return state;
    }
}

export function pointList(state = [], action) {
    switch (action.type) {
        case act.SET_POINT_LIST:
            return action.pointList;
        default:
            return state;
    }
}

export function cityCoords(state = [], action) {
    switch (action.type) {
        case act.SET_CITY_COORDS:
            return action.cityCoords;
        default:
            return state;
    }
}

export function pointCoords(state = [], action) {
    switch (action.type) {
        case act.SET_POINT_COORDS:
            return action.pointCoords;
        default:
            return state;
    }
}

export function order(state = null, action) {
    let _order;
    if (state) _order = {...state};
    switch (action.type) {
        case act.INIT_ORDER:
            return action.order;
        case act.SET_ORDER_CITY: {
            let {id, name} = action.city;
            _order.cityId = {id, name}
            return _order;
        }
        case act.SET_ORDER_POINT: {
            let {id, address, name} = action.point;
            _order.pointId = {id, address, name}
            return _order
        }
        case act.CLEAR_ORDER_CITY: {
            delete _order.cityId;
            return _order;
        }
        case act.CLEAR_ORDER_POINT: {
            delete _order.pointId;
            return _order;
        }
        case act.SET_ORDER_MODEL: {
            let _model = {...action.model};
            delete _model.createdAt;
            delete _model.updatedAt;
            _order.carId = _model;
            return _order;
        }
        case act.CLEAR_ORDER_MODEL: {
            delete _order.carId;
            return _order;
        }
        case act.SET_ORDER_COLOR: {
            _order.color = action.color;
            return _order;
        }
        case act.CLEAR_ORDER_COLOR: {
            delete _order.color;
            return _order;
        }
        case act.SET_ORDER_OPTIONS: {
            action.options.forEach(option => _order[option.field] = option.value);
            return _order;
        }
        case act.CLEAR_ORDER_OPTIONS: {
            action.options.forEach(option => delete _order[option.field]);
            return _order;
        }
        case act.SET_ORDER_RATE: {
            let _rate = action.rate;
            delete _rate.updatedAt;
            delete _rate.createdAt;
            _order.rateId = _rate;
            return _order;
        }
        case act.CLEAR_ORDER_RATE: {
            delete _order.rateId;
            return _order;
        }
        case act.SET_ORDER_DATE_FROM: {
            _order.dateFrom = +action.date;
            return _order;
        }
        case act.CLEAR_ORDER_DATE_FROM: {
            delete _order.dateFrom;
            return _order;
        }
        case act.SET_ORDER_DATE_TO: {
            _order.dateTo = +action.date;
            return _order;
        }
        case act.CLEAR_ORDER_DATE_TO: {
            delete _order.dateTo;
            return _order;
        }
        case act.SET_ORDER_PRICE: {
            _order.price = action.price;
            return _order;
        }
        case act.CLEAR_ORDER_PRICE: {
            delete _order.price;
            return _order;
        }
        default:
            return state;
    }
}
