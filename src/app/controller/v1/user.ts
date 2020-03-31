import {Context} from "koa";

// const db = require('../../../utils/sequelizeAuto/db');

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
}