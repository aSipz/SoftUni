const host = 'https://parseapi.back4app.com';
const appId = 'KO7uRRDLVlasFYYkMmW7DccDMIgDZWfambF6oCUe';
const apiKey = 'x6o62QKFMi6tR0DvrvHDLwkwdJB9Uvu6O4tzLhST';

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

    if (user) {
        options.headers['X-Parse-Session-Token'] = user.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (response.ok !== true) {
            debugger
            throw new Error(result.error);
            // result.code
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