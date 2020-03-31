// const Sequelize = require("sequelize");
//
//
// console.log('init sequelize...');
// var sqlConfig = {
//     host: "localhost",
//     username: "root",
//     password: "root",
//     database: "mynode"
// };
//
// const sequelize = new Sequelize(sqlConfig.database, sqlConfig.username, sqlConfig.password, {
//     host: sqlConfig.host, //数据库地址
//     dialect: 'mysql', //指定连接的数据库类型
//     pool: {
//         max: 5, //连接池最大连接数量
//         min: 0, //最小连接数量
//         idle: 10000, //如果一个线程 10秒内么有被使用过的话，就释放
//     },
//     logging: true, // 执行过程会log一些SQL的logging，设为false不显示
// })
//
// //对连接进行测试，查看控制台
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('******Connection has been established successfully.********');
//         console.log('******测试结束，即将退出！！！********');
//         process.exit(); //结束进程
//     })
//     .catch(err => {
//         console.error('***************Unable to connect to the database:***********', err);
//     });
// module.exports = sequelize;


const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");

const basePathG = path.join(__dirname, '../app/models');

let models = fs.readdirSync(basePathG);

dbInit();

async function dbInit() {
    let sequelize = await new Sequelize(
        'mynode',     //数据库的库名
        'root',         //mysql数据库的用户名
        'root',     //mysql数据库的密码
        {
            'dialect': 'mysql',     // 数据库使用mysql
            'host': '127.0.0.1',    // 数据库服务器ip
            'port': '3306',         // 数据库运行端口
            'timestamp': false,     // 这个参数为true是MySQL会自动给每条数据添加createdAt和updateAt字段
            'quoteIdentifiers': true
        }
    );
    models.forEach((item, index) => {
        let name = item.substr(0, item.length - 3);
        name = name.substring(0, 1).toUpperCase() + name.substring(1)   //首字母大写

        module.exports[name] = require(basePathG + `/${item}`)(sequelize, Sequelize.DataTypes)
    });
}






