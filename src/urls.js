const BASE = 'https://api-factory.simbirsoft1.com/api/db';

export const DEFAULT_REQUEST_HEADERS = {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_X_API_FACTORY_APPLICATION_ID
};

export const CITY_LIST_URL = `${BASE}/city`;
export const POINT_LIST_URL = `${BASE}/point`;