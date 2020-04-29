import sequelize from '../config/db';
import User from './userModels/index';

sequelize.addModels([User]);


export {
    User
}