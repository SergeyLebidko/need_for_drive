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

// export function getPrice(order){
//
// }