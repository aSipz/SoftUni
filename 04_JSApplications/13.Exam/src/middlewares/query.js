export function addQuery() {
    return function (ctx, next) {
        ctx.query = {};
        if (ctx.querystring) {
            const query = Object.fromEntries(ctx.querystring
                .split('&')
                .map(el => el.split('=')));
            Object.assign(ctx.query, query);
        }

        next();
    }
}