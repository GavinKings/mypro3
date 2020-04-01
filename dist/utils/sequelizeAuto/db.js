const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");
const basePathG = path.join(__dirname, '../app/models');
let models = fs.readdirSync(basePathG);
dbInit();
async function dbInit() {
    let sequelize = await new Sequelize('mynode', 'root', 'root', {
        'dialect': 'mysql',
        'host': '127.0.0.1',
        'port': '3306',
        'timestamp': false,
        'quoteIdentifiers': true
    });
    models.forEach((item, index) => {
        let name = item.substr(0, item.length - 3);
        name = name.substring(0, 1).toUpperCase() + name.substring(1);
        module.exports[name] = require(basePathG + `/${item}`)(sequelize, Sequelize.DataTypes);
    });
}
//# sourceMappingURL=db.js.map