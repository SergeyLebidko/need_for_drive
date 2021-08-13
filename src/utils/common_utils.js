export function getFormattedPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price);
}

export function getRandomString(size = 16) {
    const CHARS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    let result = [];
    for (let index = 0; index < size; index++) {
        result.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }
    return result.join('');
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function extractDateParts(date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
}