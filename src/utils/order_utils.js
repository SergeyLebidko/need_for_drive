import {OPTION_LIST, MIN_RATE_ID, DAY_RATE_ID, WEEK_RATE_ID, MONTH_RATE_ID} from '../settings';

export function hasSelectedLocation(order) {
    return ('cityId' in order) && ('pointId' in order);
}

export function hasSelectedModel(order) {
    return 'carId' in order;
}

export function hasSelectedExtra(order) {
    return ('dateFrom' in order) && ('dateTo' in order) && ('price' in order);
}

export function getDuration(dateFrom, dateTo) {
    // Количество миллисекунд в неделе, дне, часе и минуте
    const weekMs = 1000 * 60 * 60 * 24 * 7;
    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;

    let totalMs = dateTo - dateFrom + 1;
    let weekCount = Math.floor(totalMs / weekMs);
    totalMs -= (weekCount * weekMs);

    let dayCount = Math.floor(totalMs / dayMs);
    totalMs -= (dayCount * dayMs);

    let hourCount = Math.floor(totalMs / hourMs);
    totalMs -= (hourCount * hourMs);

    let minCount = Math.floor(totalMs / minMs);

    return {weekCount, dayCount, hourCount, minCount};
}

// Функция, вычисляющая стоимость заказа. Если в заказе указаны не все нужные для вычисления стоимости данные - возвращает null
export function calcOrderPrice(order) {
    if (!order) return null;

    let {rateId, dateFrom, dateTo} = order;
    if (!rateId || !dateFrom || !dateTo) return null;

    for (let option of OPTION_LIST) {
        if (order[option.field] === undefined) return null;
    }

    // Количество минут в неделе, дне, часе
    let weekMinutes = 60 * 24 * 7;
    let dayMinutes = 60 * 24;
    let hourMinutes = 60;

    let {weekCount, dayCount, hourCount, minCount} = getDuration(dateFrom, dateTo);
    let totalMinutes = (weekCount * weekMinutes) + (dayCount * dayMinutes) + (hourCount * hourMinutes) + minCount;

    let {price} = order.rateId;
    let {id} = order.rateId.rateTypeId;

    let result;
    if (id === MIN_RATE_ID) result = totalMinutes * price;
    if (id === DAY_RATE_ID) result = Math.floor(totalMinutes * (price / dayMinutes));
    if (id === WEEK_RATE_ID || id === MONTH_RATE_ID) result = Math.floor(totalMinutes * (price / weekMinutes));

    OPTION_LIST.forEach(option => {
        let optionValue = order[option.field];
        if (optionValue) result += option.price
    });

    return result;
}