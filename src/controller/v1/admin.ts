export default class adminController {
    async list(ctx:any) {

        ctx.body = '查询管理员列表list test222';

    }


    async news(ctx:any){

        console.log(ctx.url);   // /news?id=1&title=aaa
        console.log(ctx.query);  // { id: '1', title: 'aaa' } 获取的是对象   用的最多的方式      ******推荐
        console.log(ctx.querystring);  // id=1&title=aaa      获取的是一个字符串
        console.log("===================");
        //ctx里面的request里面获取get传值
        console.log(ctx.request.url);   // /news?id=1&title=aaa
        console.log(ctx.request.query);   // { id: '1', title: 'aaa' } 对象
        console.log(ctx.request.querystring);   // id=1&title=aaa
        ctx.body = 'news'
    }

}