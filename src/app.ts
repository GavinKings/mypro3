import koa from 'koa';
import bodyparser from 'koa-bodyparser';

import router from './apiRoutes/user/index';

const app = new koa();

app.use(bodyparser());
app.use(router.routes());




app.listen(3000)
console.log('this sever start up :3000')