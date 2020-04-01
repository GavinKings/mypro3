"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require('koa-router');
var router = new Router();
const apis_1 = require("./apis");
router.use('/api', apis_1.default.routes);
module.exports = router;
//# sourceMappingURL=index.js.map