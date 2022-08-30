const UserModel = require("../src/db/user");

const searchUserServer = (data,res)=>{
    console.log(data);
    UserModel.find({username:data.value},(err,docs)=>{
        if(docs.length>0){
            res.send({msg:"该用户存在",userInfo:docs})
        }else{
            res.send({msg:"该用户不存在",userInfo:[]})
        }
    })
}
module.exports = searchUserServer;