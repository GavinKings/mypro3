var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');
var app = new Koa();
var router = require('./router/index');
app.use(async (ctx, next) => {
    console.log("我是一个中间件");
    await next();
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = "404 页面de ";
    }
});
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
});
//# sourceMappingURL=app.js.map