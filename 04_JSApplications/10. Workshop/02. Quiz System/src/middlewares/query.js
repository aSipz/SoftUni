export function addQuery() {
    return function (ctx, next) {
        ctx.query = {};
        if (ctx.querystring) {
            debugger
            const query = Object.fromEntries(decodeURIComponent(ctx.querystring)
            .split('&')
            .map(el => el.split('=')));
            debugger
            Object.assign(ctx.query, query);
        }

        next();
    }
}