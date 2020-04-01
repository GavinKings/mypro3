
import {Sequelize} from 'sequelize-typescript';

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
        max: 5,
        acquire: 30000,
        idle: 10000
    },

    define: {
        timestamps: false
    }
});


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
}).catch(err => {
    console.error('Unable to connect to the database:', err)
});

sequelize.addModels([__dirname + './src/app/models/*.model.ts']);

// sequelize.addModels(['../../app/models/']);

export {sequelize}