"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const index_1 = __importDefault(require("./apiRoutes/user/index"));
const app = new koa_1.default();
app.use(koa_bodyparser_1.default());
app.use(index_1.default.routes());
app.listen(3000);
console.log('this sever start up :3000');
//# sourceMappingURL=app.js.map