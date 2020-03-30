export default class userController {
    async add(ctx:any){

        var data = ctx.request.body;
        ctx.body = data;
    }
}