const SubApplyListModel = require("../src/db/subApplyList");

const applySubServer = (data, res) => {
    console.log(data);
    for (let i = 0; i < data.value.length; i++) { 
        SubApplyListModel.find({
            applyPerson: data.value[i].applyPerson,
            applyBook: data.value[i].applyBook
        }, (err, docs) => {
            console.log(docs)
            if (docs.length === 0) {
                data.value[i].subStatus = "申请中"
                data.value[i].optionPerson = "暂无"
                let model = new SubApplyListModel(data.value[i]);
                model.save((err) => {
                    if (!err) {
                        res.send({ msg: "已经成功提交申请" })
                    } else { res.send({ msg: "提交申请失败" }) }
                })
            } 
        })
    }
}
module.exports = applySubServer;