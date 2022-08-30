const BookModel = require("../src/db/book");
const DelBookModel = require("../src/db/delBookLog");

const delBookServer = (data, res) => {
    let date = new Date()
    let delLog = {
        admin: data.username,
        author: data.author,
        bookName: data.bookName,
        date: date.toLocaleString(),
    }
    console.log(data);
    BookModel.deleteOne({ author: data.author, bookName: data.bookName }, (err, docs) => {
        if (!err) {
            console.log(docs);
            // 真的删除了才保存记录，否则不保存
            if (docs.deletedCount > 0) {
                let model = new DelBookModel(delLog);
                model.save((err) => {
                    if (!err) {
                        console.log("成功")
                        // 返回最后5条数据.slice切片左开右闭合
                        DelBookModel.find({}, (err, docs) => {
                            console.log(docs[-1])
                            res.send({ msg: "删除成功", delBookLogs: docs.slice(docs.length - 5, docs.length), status: 1 })
                        })
                    }
                })
            } else {
                // 返回最后5条数据.slice切片左开右闭合
                DelBookModel.find({}, (err, docs) => {
                    console.log(docs[-1])
                    res.send({ msg: "数据库没有这本书", delBookLogs: docs.slice(docs.length - 5, docs.length), status: 1 })
                })
            }


        } else {

            res.send({ msg: "删除失败", status: 0, delBookLogs: docs.slice(docs.length - 5, docs.length) })
        }
    })
}
module.exports = delBookServer;