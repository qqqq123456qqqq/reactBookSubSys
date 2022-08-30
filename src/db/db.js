const mongoose = require("mongoose");
// 连接数据库 并建立好三个model对应三个表
// 当修改表的结构时，要重新启动服务，还不行，需要删除原先的数据，记得按需备份
mongoose.connect("mongodb://127.0.0.1/booksubsys");
mongoose.connection.once("open", () => console.log("数据库连接成功"))
module.exports = mongoose;
