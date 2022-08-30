const AdminModule = require('../src/db/admin')
const UserModule = require('../src/db/user')
const registerValidInput = (data,res)=>{
    let model;
    if(data.identify === 'admin'){
        model = new AdminModule(data);
    }else if(data.identify === 'user'){
        model = new UserModule(data);
    }
    model.save(function (err) {
        if (!err) {
            console.log("数据保存成功");
            res.send({ msg: "数据保存成功",status:1})
        } else {
            console.log("数据保存失败")
            res.send({ msg: "数据保存失败",status:0})
        }
    });
}
module.exports = registerValidInput;