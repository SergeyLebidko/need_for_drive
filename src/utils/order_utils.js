export function hasSelectedLocation(order){
    return ('cityId' in order) && ('pointId' in order);
}

export function hasSelectedModel(order){
    return 'carId' in order;
}

export function hasSelectedExtra(order){
    return ('dateFrom' in order) && ('dateTo' in order) && ('price' in order);
}

export function getDuration(dateFrom, dateTo){
    return dateTo - dateFrom;
}