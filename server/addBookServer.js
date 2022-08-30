const BookModel = require("../src/db/book");
const addBookServer = (data, res) => {

    BookModel.find({ bookName: data.bookName, author: data.author, publisher: data.publisher },(err, docs) => {
        if (docs.length > 0) {
            // 修改数据库的bookNum属性+data.bookNum就行
            let bookNum = parseInt(docs[0].bookNum)+parseInt(data.bookNum);
            console.log(bookNum)
            BookModel.updateOne({ bookName: data.bookName, author: data.author, publisher: data.publisher },{$set:{bookNum:bookNum}},(err)=>{
                if(!err) console.log('修改成功')
                console.log(err);
            })
            res.send({ msg: "数据保存成功", status: 1 })
        }
        else {
            let model = new BookModel(data)
            model.save((err) => {
                if (!err) {
                    console.log("数据保存成功");
                    res.send({ msg: "数据保存成功", status: 1 })
                } else {
                    console.log("数据保存失败")
                    res.send({ msg: `该书已存在${docs.length}本`, status: 0 })
                }
            })
        }
    })

}
module.exports = addBookServer;