var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');
var app = new Koa();
var router = new Router();
app.use(async (ctx, next) => {
    console.log("我是一个中间件");
    await next();
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = "404 页面de ";
    }
});
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess',
    maxAge: 10000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
};
app.use(session(CONFIG, app));
router.get('/', async (ctx) => {
    ctx.cookies.set('userinfo', encodeURIComponent('zhangsan'), { maxAge: 10 * 1000 });
    ctx.session.username = 'hanbaojin122';
    ctx.body = " index";
});
router.get('/list', async (ctx) => {
    console.log(decodeURIComponent(ctx.cookies.get('userinfo')));
    console.log(ctx.session.username);
    ctx.body = 'list test';
});
router.get('/news', async (ctx) => {
    console.log(ctx.url);
    console.log(ctx.query);
    console.log(ctx.querystring);
    console.log("===================");
    console.log(ctx.request.url);
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.body = 'news';
});
router.post('/add', async (ctx) => {
    let data = ctx.request.body;
    ctx.body = data;
});
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
});
//# sourceMappingURL=app2.js.map