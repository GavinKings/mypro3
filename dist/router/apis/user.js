"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('koa-router');
const router = new Router();
const index_1 = require("../../app/controller/index");
const index_2 = require("../../app/service/index");
router.get('/userInfo', async (ctx, next) => {
    console.log(ctx.state);
    ctx.body = 'userInfo test';
});
router.post('新增用户', '/add', index_1.default.user.add);
router.get('用户列表查询', '/userList', index_2.default.userService.findAll);
exports.default = {
    routes: router.routes()
};
//# sourceMappingURL=user.js.map