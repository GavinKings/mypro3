// import path from 'path';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'mynode',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    // models: [__dirname + '../../app/models'], // or [Player, Team],
    pool: {
        min: 0,
        max: 5
    },
    define: {
        timestamps: false
    }
});
sequelize.addModels(['../../app/models/']);

export { sequelize }