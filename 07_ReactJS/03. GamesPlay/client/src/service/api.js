const host = 'http://localhost:3030';

async function request(method, url, data) {

    const auth = localStorage.getItem('auth');

    const user = auth ? JSON.parse(auth) : null;

    const options = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }
    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            return response;
        }

        const data = await response.json();

        if (response.ok !== true) {

            localStorage.removeItem('auth');

            throw new Error(data.message);
        }

        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');