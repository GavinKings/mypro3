"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userController {
    async add(ctx) {
        var data = ctx.request.body;
        ctx.body = data;
    }
    async userlist(ctx) {
    }
}
exports.default = userController;
//# sourceMappingURL=user.js.map