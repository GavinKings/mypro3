import { BaseContext, Next } from 'koa';
import Router from 'koa-router';
import UserController from '../../controller/userController/index';

const router = new Router()
router.prefix('/user')

// 用户注册
router.post('/regist', async (ctx: BaseContext, next: Next) => {

})

// 用户登陆
router.post('/login', async (ctx: BaseContext, next: Next) => {

})

// 获取用户 列表
router.get('/list', async (ctx: BaseContext, next: Next) => {
    const data =await UserController.getList();
    ctx.body = {
        key: data
    }
})

export default router;