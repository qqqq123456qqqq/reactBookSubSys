const SubApplyListModel = require("../src/db/subApplyList");

const rejectSubServer = async(data,res)=>{
    console.log(data);
    SubApplyListModel.updateOne({applyBook:data.applyBook,applyPerson:data.applyPerson},{subStatus:"拒绝申请",optionPerson:data.optionPerson}).then(doc=>{
        if(doc.modifiedCount>0) res.send({msg:"拒绝申请成功",status:1})
        // else res.send({msg:"修改成功",status:1})
    })
}
module.exports = rejectSubServer;