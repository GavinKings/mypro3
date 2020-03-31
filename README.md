├─ src                     源码
│  ├─ app                  业务代码
│  │  ├─ controllers       控制器：用于解析用户输入，处理后返回相应的结果
│  │  ├─ models            模型  ：用于定义数据模型
│  │  ├─ services          服务  ：用于编写业务逻辑层，比如连接数据库，调用第三方接口等
│  │  └─ views             视图  ：用于放置模板文件，返回客户端的视图层
│  │
│  ├─ core                 核心代码
│  │  ├─ controller.ts     控制器基类
│  │  ├─ model.ts          模型基类
│  │  └─ service.ts        服务基类
│  │
│  ├─ middlewares          中间件
│  ├─ public               静态资源
│  ├─ router               URL 路由
│  ├─ utils                工具库
│  └─ index.js             入口：用于自定义启动时的初始化工作，比如启动 https，调用中间件、路由等
│  


从数据库模型中生成models模块
1 安装依赖
npm i --save sequelize sequelize-auto mysql mysql2
 
2 配置 package.json
script:
   "sql": "node ./src/utils/sqlToModels"

3 编写sqlToModels.ts
// https://github.com/sequelize/sequelize-auto






2.2. 自定义挂载对象
为了提高开发效率，这里人为的将一些自定义对象挂载到 app 下，用 $ 前缀命名，与 Koa.js 内置对象做区分。

app.$helpers：辅助函数
app.$model：公用模型对象
app.$Service：服务基类
app.$Controller：控制器基类
app.$models：模型集合
app.$services：服务集合
app.$controllers：控制器集合

https://blog.csdn.net/weixin_33691817/article/details/88024204?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task


