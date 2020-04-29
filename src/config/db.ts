import { Sequelize, Model } from 'sequelize-typescript';

const sequelize = new Sequelize({
    host: "localhost",
    database: "koacms",
    username: "root",
    password: "shusong",
    dialect: "mysql",
    port: 3306,
    pool: {
        min: 0,
        max: 5,
        idle: 1000
    },
    logging: true, // 是否打印日志
    timezone: "+08:00", // 设置数据库市区，建议设置，mysql默认的时区比东八区少了八个小时
    define: {
      timestamps: true, // 为模型添加 createdAt 和 updatedAt 两个时间戳字段
      paranoid: true, // 使用逻辑删除。设置为true后，调用 destroy 方法时将不会删队模型，而是设置一个 deletedAt 列。此设置需要 timestamps=true
      underscored: true, // 转换列名的驼峰命名规则为下划线命令规则
      freezeTableName: true // 转换模型名的驼峰命名规则为表名的下划线命令规则
    }
})

export default sequelize;