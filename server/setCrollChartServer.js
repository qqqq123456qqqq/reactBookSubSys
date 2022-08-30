const ChartModel = require("../src/db/crollChart");
const BookModel = require("../src/db/book")
const setCrollChartServer = (data, res) => {
    console.log(data.data);
    if (data.data.length > 0) {
        ChartModel.deleteMany({},(err)=>{console.log("success")})
        for (let i = 0; i < data.data.length; i++) {
            BookModel.find({author:data.data[i].author,bookName:data.data[i].bookName}, (err, docs) => {
                if (docs.length > 0) {
                    let a = {
                        id: data.data[i].id,
                        author: docs[0].author,
                        bookName: docs[0].bookName,
                        bookInfo: docs[0].bookInfo,
                        publisher: docs[0].publisher,
                        bookImg: docs[0].bookImg,
                        bookNum: docs[0].bookNum,
                    }
                    let model = new ChartModel(a);
                    model.save()
                }
            })

        }
        res.send({ msg: "ok" })
    }
    else res.send({ msg: "获取失败" })
}
module.exports = setCrollChartServer;