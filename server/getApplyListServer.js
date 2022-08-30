const SubApplyListModel = require("../src/db/subApplyList")

const getApplyListServer = (data,res)=>{
    if (data.value === '') {
        console.log(data.value)
        SubApplyListModel.find({subStatus:"申请中"}, (err, docs) => {
            if (docs.length > 0) {
                res.send({ msg: "已成功拿到数据", data: docs })
            } else {
                res.send({ msg: "当前没有人进行订阅", data: [] })
            }
        })
    } else {
        SubApplyListModel.find({ applyPerson: data.value, subStatus:"申请中" }, (err, docs) => {
            if (docs.length > 0) {
                res.send({ msg: "已成功拿到数据", data: docs })
            } else {
                res.send({ msg: "该用户进行订阅", data: [] })
            }
        })
    }
}
module.exports = getApplyListServer;