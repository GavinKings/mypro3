"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('koa-router');
const router = new Router();
const admin_1 = require("./admin");
const user_1 = require("./user");
router.use('/admin', admin_1.default.routes);
router.use('/user', user_1.default.routes);
exports.default = {
    routes: router.routes()
};
//# sourceMappingURL=index.js.map