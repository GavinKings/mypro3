var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');

var app = new Koa();
var router = new Router();


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


//配置session的中间件
app.keys = ['some secret hurr'];   /**cookie的签名 默认*/
const CONFIG = {
    key: 'koa:sess', /** 默认 */
    maxAge: 10000, /**  cookie的过期时间 */
    overwrite: true, /** 默认 可以重写过期时间 */
    httpOnly: true, /**  true表示只有服务器端可以获取 cookie */
    signed: true, /** 默认 签名 */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） */
    renew: false, /** 当用户进行浏览器操作时刷新 cookie 过期时间 */
};
app.use(session(CONFIG, app));



//路由
router.get('/', async (ctx: any) => {
    //设置cookie
    ctx.cookies.set('userinfo', encodeURIComponent('zhangsan'), {maxAge: 10 * 1000});


    //设置session
    ctx.session.username ='hanbaojin122';

    ctx.body = " index";
});

// 打开postman localhost:3000/add

router.get('/list', async (ctx: any) => {
    // 获取 cookie
    console.log(decodeURIComponent(ctx.cookies.get('userinfo')));

    //获取session
    console.log(ctx.session.username);
    ctx.body = 'list test';
});


router.get('/news', async (ctx: any) => {

    /**
     在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
     query：返回的是格式化好的参数对象。
     querystring：返回的是请求字符串。
     */

    // ctx  上下文 context ，包含了request 和response等信息
    // 返回数据    相当于：原生里面的res.writeHead()  res.end()

    // http://localhost:3000/news?id=1&title=aaa
    //从ctx中读取get传值
    console.log(ctx.url);   // /news?id=1&title=aaa
    console.log(ctx.query);  // { id: '1', title: 'aaa' } 获取的是对象   用的最多的方式      ******推荐
    console.log(ctx.querystring);  // id=1&title=aaa      获取的是一个字符串
    console.log("===================");
    //ctx里面的request里面获取get传值
    console.log(ctx.request.url);   // /news?id=1&title=aaa
    console.log(ctx.request.query);   // { id: '1', title: 'aaa' } 对象
    console.log(ctx.request.querystring);   // id=1&title=aaa
    ctx.body = 'news'
});


//post 方式提交
router.post('/add', async (ctx: any) => {
    let data = ctx.request.body;
    ctx.body = data;
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000,()=>{
    //http://localhost:3000/
    // http://localhost:3000/list
    //控制台可看到打印
});