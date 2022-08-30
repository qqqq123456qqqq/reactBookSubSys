/**
 * 包含所有接口函数
 * 每个接口返回的都是promise
 */
import ajax from './ajax'

// 基础网址
const base = {
    baseurl:'http://localhost:3300',
    // register路由
    register:"/api/register",
    // login路由
    login:'/api/login',
    // usernameValid用户名验证
    usernameValid:'/api/usernameValid',
    // reqAddBook增加图书
    addBook:'/api/admin/manageBooks/addbook',
    // searchBook搜索图书
    searchBook:'/api/admin/searchBook',
    // searchBook搜索图书
    usersearchBook:'/api/user/searchBook',
    // saveCrollChart保存轮播图数据
    setCrollChart:'/api/admin/setCrollChart',
    // getCrollChart获取轮播图数据
    getCrollChart:'/api/getCrollChart',
    // delBook搜索图书
    delBook:'/api/admin/delBook',
    // changeBook修改图书信息
    changeBook:'/api/admin/changeBook',
    // searchBook搜索用户
    searchUser:'/api/admin/searchUser',
    // getApplyList获取订阅申请列表
    getApplyList:'/api/admin/getApplyList',
    // getApplyList获取订阅申请日志
    getSublogs:'/api/admin/getSublogs',
    // reqrejectSub拒绝订阅
    rejectSub:'/api/admin/rejectSub',
    // reqagreeSub同意订阅
    agreeSub:'/api/admin/agreeSub',
    // changSelfInfo修改个人信息
    changSelfInfo:'/api/admin/changeSelfInfo',
    // deleteSelf注销
    deleteSelf:'/api/admin/deleteSelf',
    // reqApplySub申请订阅
    applySub:'/api/user/applySub',
    // getSubApplyList用户获取订阅列表
    getSubApplyList:'/api/user/getSubApplyList',
    // reqDeleteSub用户获取订阅列表
    deleteSub:'/api/user/deleteSub',
    // getcrollChartData用户获取轮播图数据
    getcrollChartData:'/api/user/getcrollChartData',
}
// 登录：
export const reqLogin=data=>ajax(base.baseurl+base.login,data,'POST');

// 注册：
export const reqRegister = data => ajax(base.baseurl+base.register,data,'POST');

// 用户名验证：
export const usernameValid=data => ajax(base.baseurl+base.usernameValid,data,'POST');;

// 增加图书：
export const reqAddBook=data => ajax(base.baseurl+base.addBook,data,'POST');

// 搜索图书：
export const reqSearchBook=data => ajax(base.baseurl+base.searchBook,data,'POST');

// 搜索图书：
export const requsersearchBook=data => ajax(base.baseurl+base.usersearchBook,data,'POST');

// 轮播图存档：
export const reqsetCrollChart=data => ajax(base.baseurl+base.setCrollChart,data,'POST');;

// 提取轮播图存档：
export const reqGetCrollChart=data => ajax(base.baseurl+base.getCrollChart,data,'POST');;

// 删除书籍：
export const reqDelBook=data => ajax(base.baseurl+base.delBook,data,'POST');

// 更改书籍：
export const reqChangeBook=data => ajax(base.baseurl+base.changeBook,data,'POST');

// 查询用户：
export const reqSearchUser=data => ajax(base.baseurl+base.searchUser,data,'POST');

// 获取申请列表：
export const reqGetApplyList=data => ajax(base.baseurl+base.getApplyList,data,'POST');

// 拒绝申请：
export const reqrejectSub=data => ajax(base.baseurl+base.rejectSub,data,'POST');

// 同意申请：
export const reqagreeSub=data => ajax(base.baseurl+base.agreeSub,data,'POST');

// 获订阅流水：
export const reqGetSublogs=data => ajax(base.baseurl+base.getSublogs,data,'POST');

// 修改信息：
export const reqChangSelfInfo=data => ajax(base.baseurl+base.changSelfInfo,data,'POST');

// 注销
export const reqDeleteSelf=data => ajax(base.baseurl+base.deleteSelf,data,'POST');

// 申请订阅
export const reqApplySub=data => ajax(base.baseurl+base.applySub,data,'POST');

// 获取订阅列表
export const reqGetSubApplyList=data => ajax(base.baseurl+base.getSubApplyList,data,'POST');

// 取消订阅
export const reqDeleteSub=data => ajax(base.baseurl+base.deleteSub,data,'POST');

// 获取轮播图数据
export const reqgetcrollChartData=data => ajax(base.baseurl+base.getcrollChartData,data,'POST');
