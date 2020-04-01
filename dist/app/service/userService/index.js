"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../../models/User.model");
class UserServiceClass {
    async findAll() {
        let data = await User_model_1.User.findAll();
        return data;
    }
}
exports.default = UserServiceClass;
//# sourceMappingURL=index.js.map