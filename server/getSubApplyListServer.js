const SubApplyListModel = require("../src/db/subApplyList");

const getSubApplyListServer = (data,res)=>{
    console.log(data)
    SubApplyListModel.find(data,(err,docs)=>{
        if(docs.length>0) res.send({msg:"已经找到了",data:docs,status:1});
        else res.send({msg:"您还没有订阅任何书籍",status:0,data:[]})
    })
}
module.exports = getSubApplyListServer;