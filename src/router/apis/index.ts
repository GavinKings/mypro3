const Router = require('koa-router');
const router = new Router();


import admin from './admin';
import user from './user';


router.use('/admin', admin.routes);
router.use('/user', user.routes);
export default {
    routes: router.routes()
};