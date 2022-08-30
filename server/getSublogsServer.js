const SubApplyListModel = require("../src/db/subApplyList");

const getSublogsServer = async (data, res) => {
    console.log(data);
    if (data.value === '') {
        console.log(data.value)
        SubApplyListModel.find({}, (err, docs) => {
            if (docs.length > 0) {
                res.send({ msg: "已成功拿到数据", data: docs })
            } else {
                res.send({ msg: "当前没有人进行订阅", data: [] })
            }
        })
    } else {
        SubApplyListModel.find({ applyPerson: data.value }, (err, docs) => {
            if (docs.length > 0) {
                res.send({ msg: "已成功拿到数据", data: docs })
            } else {
                res.send({ msg: "该用户进行订阅", data: [] })
            }
        })
    }
}
module.exports = getSublogsServer;