import {Context} from "koa";

const Router = require('koa-router');
const router = new Router();
import controller from '../../app/controller/index';


router.get('/userInfo', async (ctx: Context, next: () => void) => {

    console.log(ctx.state);
    ctx.body = 'userInfo test';


});



//post 方式提交
router.post('新增用户'  ,'/add', controller.user.add);


export default {
    routes: router.routes()
};
