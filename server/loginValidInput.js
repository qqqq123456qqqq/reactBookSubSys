const AdminModule = require("../src/db/admin");
const UserModule = require("../src/db/user");
const loginValidInput = (data, res) => {
    let model;
    if (data.identify === 'admin') {
        model = AdminModule;
    }
    else if (data.identify === 'user') {
        model = UserModule;
    }
    model.find({identify:data.identify,username:data.username,password:data.password},(err,docs)=>{
        if(docs.length > 0){
            console.log(docs)
            res.send({msg:'用户名密码以及身份正确',status:1,data:docs})
        }else{
            res.send({msg:'用户不存在或者您的密码输入错误，请重新输入',status:0,data:[]})
        }
    })
}
module.exports = loginValidInput;