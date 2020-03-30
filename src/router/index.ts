var Router = require('koa-router');
var router = new Router();
import apiRouter from './apis';

router.use('/api', apiRouter.routes);


module.exports = router;