"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'mynode',
    dialect: 'mysql',
    username: 'root',
    password: 'shusong',
    host: 'localhost',
    port: 3306,
    pool: {
        min: 0,
        max: 5
    },
    define: {
        timestamps: false
    }
});
exports.sequelize = sequelize;
sequelize.addModels(['../../app/models/']);
//# sourceMappingURL=db.js.map