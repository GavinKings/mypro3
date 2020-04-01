import {Context} from "koa";

// const db = require('../../../utils/sequelizeAuto/db');

// import service from '../../service/index'

export default class userController {
    async add(ctx:any){

        var data = ctx.request.body;
        ctx.body = data;

        // let index = await db.User.findAll({
        //     offset: 0,
        //     limit:10,
        // });
        // ctx.body = {code:200, data:index};

    }

    async userlist(ctx:any){
        // var data = ctx.request.body;
        // ctx.body = data;
        // let index =  await service.userService.findAll();
        // ctx.body = {code:200, data:index};
    }
}