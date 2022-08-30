const SubApplyListModel = require("../src/db/subApplyList");


const deleteSubServer = (data, res) => {
    console.log(data);
    if (data.values.length > 0) {
        for (let i = 0; i < data.values.length; i++) {
            SubApplyListModel.deleteOne({applyPerson:data.values[i].applyPerson,
            applyBook:data.values[i].applyBook},
                (err, docs) => {
                console.log(docs)
            })
        }
        res.send({ msg: "已成功删除", status: 1 });
    }
}
module.exports = deleteSubServer;