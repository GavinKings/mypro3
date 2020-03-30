const Router = require('koa-router');
const router = new Router();

import controller from '../../app/controller/index';

router.get('/', async (ctx: any) => {
    //设置cookie
    ctx.cookies.set('userinfo', encodeURIComponent('zhangsan'), {maxAge: 10 * 1000});
// 获取 cookie
    console.log(decodeURIComponent(ctx.cookies.get('userinfo')));

    ctx.body = " index";
});



router.get('查询管理员八卦','/news', controller.admin.news);


router.get('查询管理员列表','/list', controller.admin.list);






export default {
    routes: router.routes()
};
