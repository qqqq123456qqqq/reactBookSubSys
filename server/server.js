const express = require("express");
const router = require('./router');
const app = express();
const cors = require("cors");
// 在后台服务器进行表单验证,设置一下post就可以接受参数了
const bodyParser = require("body-parser");
// 解决跨域
/**
 * 协议、主机、端口号，有一个不一致就是跨域
 * 现在服务器端口号是3300，前端是3000，这就牵扯到跨域
 * ——方法1：后台允许跨域：cors（）
 * ——（开发时常用）方法2：代理,开发环境时因为有react脚手架，代理是有的，但是需要在package.json中进行配置
 * 
 */
app.use(cors());
// 解析post请求
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use("/api", router)
// 监听一个服务器运行的端口
app.listen(3300, () => {
    console.log("服务器正在运行")
})


