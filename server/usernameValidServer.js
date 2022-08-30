const AdminModel = require('../src/db/admin.js')
const UserModel = require('../src/db/user.js')
const usernameValidServer = (data,res)=>{
    console.log(data);
    let model;
    if (data.identify === 'admin') {
        model = AdminModel;
    }
    else if (data.identify === 'user') {
        model = UserModel;
    }
    model.find({username:data.username,identify:data.identify},(err,docs)=>{
        if (docs.length === 0) {
            res.send({ msg: "当前用户名是新的，可以注册",status:1 })   
        } else {
            res.send({ msg: "当前用户名已经存在，请重新输入",status:0 })
        }
    })
}
module.exports = usernameValidServer;