import { get } from './api.js';
import { getUserData } from './util.js';



const endpoint = {
    'recipes': '/data/recipes?sortBy=_createdOn%20desc',
    'byId': '/data/recipes/'
}

export async function getAll(page, query) {
    const pageSize = 3;

    let dataURL = endpoint.recipes;
    let countURL = dataURL;
    dataURL += `&pageSize=${pageSize}&offset=${(page - 1) * pageSize}`
    if (query) {
        dataURL += `&where${encodeURIComponent(`name LIKE "${query}"`)}`;
        countURL += `&where${encodeURIComponent(`name LIKE "${query}"`)}`;
    }
    countURL += '?count';
    const [data, count] = await Promise.all([
        get(dataURL),
        get(countURL)
    ]);
    return {
        data,
        pages: Math.ceil(count / pageSize)
    }
}

function composeUrl(page, search) {
    let url = '';
    if (page) {
        url += `?page=${page}`;
    }
    if (search) {
        url += `&search=${search}`;
    }
}

const page = Number(ctx.query.page) || 1;
const search = ctx.query.search || '';

function session(ctx, next) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    }
    next();
}

function decorateContext(ctx, next) {
    render(navTemplate(ctx.user), document.querySelector('main'));
    
    ctx.render = function (content) {
        render(content, document.querySelector('main'));
    };
}

function parseQuery(ctx, next) {
    ctx.query = {};
    if (ctx.querystring) {
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(el => el.split('=')));
        Object.assign(ctx.query, query);
    }

    next();
}
