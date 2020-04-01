const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('mynode', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    directory: './src/app/models',
    port: '3306',
    additional: {
        timestamps: false
    }
});
auto.run(function (err) {
    if (err)
        throw err;
});
//# sourceMappingURL=sequelizeAuto.js.map