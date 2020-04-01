"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("./v1/admin");
const user_1 = require("./v1/user");
exports.default = {
    admin: new admin_1.default(),
    user: new user_1.default()
};
//# sourceMappingURL=index.js.map