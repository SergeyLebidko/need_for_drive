import {OPTION_LIST, MIN_RATE_ID, DAY_RATE_ID, WEEK_RATE_ID, MONTH_RATE_ID} from '../settings';

export function hasSelectedLocation(order) {
    return ('cityId' in order) && ('pointId' in order);
}

export function hasSelectedModel(order) {
    return 'carId' in order;
}

export function hasSelectedExtra(order) {
    return ('price' in order) && order.price >= order.carId.priceMin && order.price <= order.carId.priceMax;
}

export function getDuration(dateFrom, dateTo) {
    // Количество миллисекунд в неделе, дне, часе и минуте
    const weekMs = 1000 * 60 * 60 * 24 * 7;
    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;

    let totalMs = dateTo - dateFrom + 1;
    const weekCount = Math.floor(totalMs / weekMs);
    totalMs -= (weekCount * weekMs);

    const dayCount = Math.floor(totalMs / dayMs);
    totalMs -= (dayCount * dayMs);

    const hourCount = Math.floor(totalMs / hourMs);
    totalMs -= (hourCount * hourMs);

    const minCount = Math.floor(totalMs / minMs);

    return {weekCount, dayCount, hourCount, minCount};
}

export function calcOrderPrice(order) {
    // Проверяем наличие всех необходимых для вычисления стоимости заказа данных. Если чего-то не хватает - возвращаем null
    if (!order) return null;

    const {rateId, dateFrom, dateTo} = order;
    if (!rateId || !dateFrom || !dateTo) return null;

    for (let option of OPTION_LIST) {
        if (order[option.field] === undefined) return null;
    }

    // Количество минут в неделе, дне, часе
    const weekMinutes = 60 * 24 * 7;
    const dayMinutes = 60 * 24;
    const hourMinutes = 60;

    const {weekCount, dayCount, hourCount, minCount} = getDuration(dateFrom, dateTo);
    const totalMinutes = (weekCount * weekMinutes) + (dayCount * dayMinutes) + (hourCount * hourMinutes) + minCount;

    const {price} = order.rateId;
    const {id} = order.rateId.rateTypeId;

    const RATE_SELECTOR = {
        [MIN_RATE_ID]: totalMinutes * price,
        [DAY_RATE_ID]: Math.floor(totalMinutes * (price / dayMinutes)),
        [WEEK_RATE_ID]: Math.floor(totalMinutes * (price / weekMinutes)),
        [MONTH_RATE_ID]: Math.floor(totalMinutes * (price / (30 * dayMinutes)))
    }
    let result = RATE_SELECTOR[id];

    // Учитываем стоимость дополнительных опций
    OPTION_LIST.forEach(option => {
        const optionValue = order[option.field];
        if (optionValue) result += option.price
    });

    return result;
}