const SubApplyListModel = require("../src/db/subApplyList");

const agreeSubServer = async(data,res)=>{
    console.log(data);
    SubApplyListModel.updateOne({applyBook:data.applyBook,applyPerson:data.applyPerson},{subStatus:"同意申请",optionPerson:data.optionPerson}).then(doc=>{
        if(doc.modifiedCount>0) res.send({msg:"同意申请成功",status:1})
        else console.log(doc)
    })
}
module.exports = agreeSubServer;