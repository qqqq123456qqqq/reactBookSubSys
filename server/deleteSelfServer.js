const AdminModel = require("../src/db/admin");
const UserModel = require("../src/db/user");

const deleteSelfServer = (data,res)=>{
    console.log(data)
    if(data!==null){
        let model ;
        if(data.identify==='admin'){
            model = AdminModel;
        }
        if(data.identify === 'user'){
            model = UserModel;
        }
        model.deleteOne({username:data.username},(err,docs)=>{
            if(!err){
                console.log(docs)
                if(docs.deletedCount>0) res.send({msg:"删除成功",status:1});
            }
        })
    }
    
}
module.exports = deleteSelfServer;