const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto(
    'mynode',     //数据库的库名
    'root',         //mysql数据库的用户名
    'root',     //mysql数据库的密码
    {
        host: '127.0.0.1',      // 数据库服务器ip
        dialect: 'mysql',
        directory: './src/app/models',  // prevents the program from writing to disk
        port: '3306',           // 数据库运行端口
        additional: {
            timestamps: false
        }
    }
)
auto.run(function (err) {
    if (err) throw err;
    // console.log(auto.tables); // table list
    // console.log(auto.foreignKeys); // foreign key list

    //生成models表后，直接执行项目
    // require('./bin/www');
});

