"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('koa-router');
const router = new Router();
const index_1 = require("../../app/controller/index");
router.get('/', async (ctx, next) => {
    ctx.cookies.set('userinfo', encodeURIComponent('zhangsan'), { maxAge: 10 * 1000 });
    console.log(decodeURIComponent(ctx.cookies.get('userinfo')));
    ctx.body = " index";
});
router.get('查询管理员八卦', '/news', index_1.default.admin.news);
router.get('查询管理员列表', '/list', index_1.default.admin.list);
exports.default = {
    routes: router.routes()
};
//# sourceMappingURL=admin.js.map