"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class adminController {
    async list(ctx, next) {
        ctx.body = '查询管理员列表list test222';
    }
    async news(ctx, next) {
        console.log(ctx.url);
        console.log(ctx.query);
        console.log(ctx.querystring);
        console.log("===================");
        console.log(ctx.request.url);
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.body = 'news';
    }
}
exports.default = adminController;
//# sourceMappingURL=admin.js.map