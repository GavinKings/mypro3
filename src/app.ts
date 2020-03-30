var Koa = require('koa');

var bodyParser = require('koa-bodyparser');
var session = require('koa-session');

var app = new Koa();
// var Router = require('koa-router');
// const router = new Router('./router/index');
var router = require('./router/index');

//中间件
app.use(async (ctx: any, next: any) => {
    console.log("我是一个中间件");
    // 当前路由匹配完成以后继续向下匹配
    await next();
    //如果页面找不到
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = "404 页面de "
    }
});




app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000,()=>{
    //http://localhost:3000/
    // http://localhost:3000/list
    //控制台可看到打印
});