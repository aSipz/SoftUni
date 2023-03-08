import { getUserData } from '../util.js';

const host = 'https://parseapi.back4app.com';
const appId = 'KO7uRRDLVlasFYYkMmW7DccDMIgDZWfambF6oCUe';
const apiKey = '5Mr95pV6WcO8P2TJhI4qjf7mIbPSqvpfMFTFDNOc';

async function request(method, url = '/', data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const auth = localStorage.getItem('auth');

    const user = auth ? JSON.parse(auth) : null;

    if(user) {
        options.headers['X-Parse-Session-Token'] = user.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        }

        const result = await response.json();

        if (response.ok != true) {
            throw new Error(result.message || result.error);
        }
 
        return result;
    } catch (err) {
        throw err;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');