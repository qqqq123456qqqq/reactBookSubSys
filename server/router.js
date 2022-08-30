// 后端路由文件
const express = require("express");
const router = express.Router();
const registerValidInput = require('./registerValidInput');
const loginValidInput = require("./loginValidInput")
const usernameValidServer = require('./usernameValidServer')
const addBookServer = require('./addBookServer')
const searchBookServer = require('./searchBookServer')
const setCrollChartServer = require('./setCrollChartServer');
const getCrollChartServer = require("./getCrollChartServer");
const delBookServer = require("./delBookServer");
const changeBookServer = require("./changeBookServer");
const searchUserServer = require("./searchUserServer");
const getApplyListServer = require("./getApplyListServer");
const changeSelfInfoServer = require("./changeSelfInfoServer");
const deleteSelfServer = require("./deleteSelfServer");
const applySubServer = require("./applySubServer");
const getSubApplyListServer = require("./getSubApplyListServer");
const deleteSubServer = require("./deleteSubServer");
const getcrollChartDataServer = require("./getcrollChartDataServer");
const getSublogsServer = require("./getSublogsServer");
const rejectSubServer = require("./rejectSubServer");
const agreeSubServer = require("./agreeSubServer");
// 注册一个路由_注册
router.post("/register",(req,res)=>{
    console.log("这里是router")
    registerValidInput(req.body, res);
})
// 注册一个路由_登录
router.post("/login",(req,res)=>{
    loginValidInput(req.body,res);
})
// 注册一个路由_登录
router.post("/usernameValid",(req,res)=>{
    usernameValidServer(req.body,res);
})
// 注册一个路由_管理员增加书籍
router.post("/admin/manageBooks/addbook",(req,res)=>{
    addBookServer(req.body,res);
})
// 注册一个路由_管理员搜索书籍
router.post("/admin/searchBook",(req,res)=>{
    searchBookServer(req.body,res);
})
// 注册一个路由_用户搜索书籍
router.post("/user/searchBook",(req,res)=>{
    searchBookServer(req.body,res);
})
// 注册一个路由_管理员轮播图存档
router.post("/admin/setCrollChart",(req,res)=>{
    setCrollChartServer(req.body,res);
})
// 注册一个路由_管理员提取轮播图存档
router.post("/getCrollChart",(req,res)=>{
    getCrollChartServer(req.body,res);
})
// 注册一个路由_管理员删除书籍
router.post("/admin/delBook",(req,res)=>{
    delBookServer(req.body,res);
})
// 注册一个路由_管理员修改书籍
router.post("/admin/changeBook",(req,res)=>{
    changeBookServer(req.body,res);
})
// 注册一个路由_管理员搜索用户
router.post("/admin/searchUser",(req,res)=>{
    searchUserServer(req.body,res);
})
// 注册一个路由_管理员获取申请列表
router.post("/admin/getApplyList",(req,res)=>{
    getApplyListServer(req.body,res);
})
// 注册一个路由_管理员拒绝申请
router.post("/admin/rejectSub",(req,res)=>{
    rejectSubServer(req.body,res);
})
// 注册一个路由_管理员同意申请
router.post("/admin/agreeSub",(req,res)=>{
    agreeSubServer(req.body,res);
})
// 注册一个路由_管理员获取订阅日志
router.post("/admin/getSublogs",(req,res)=>{
    getSublogsServer(req.body,res);
})
// 注册一个路由_管理员修改自己信息
router.post("/admin/changeSelfInfo",(req,res)=>{
    changeSelfInfoServer(req.body,res);
})
// 注册一个路由_管理员注销
router.post("/admin/deleteSelf",(req,res)=>{
    deleteSelfServer(req.body,res);
})
// 注册一个路由_用户申请订阅
router.post("/user/applySub",(req,res)=>{
    applySubServer(req.body,res);
})
// 注册一个路由_用户获取订阅列表
router.post("/user/getSubApplyList",(req,res)=>{
    getSubApplyListServer(req.body,res);
})
// 注册一个路由_用户取消订阅
router.post("/user/deleteSub",(req,res)=>{
    deleteSubServer(req.body,res);
})
// 注册一个路由_用户获取轮播图数据
router.post("/user/getcrollChartData",(req,res)=>{
    getcrollChartDataServer(req.body,res);
})

module.exports = router;