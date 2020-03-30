import adminController from './v1/admin';
import userController from './v1/user';

export default {
    admin:new adminController(),
    user:new userController()
}