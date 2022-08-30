const BookModel = require("../src/db/book");

const searchBookServer = (data, res) => {
    console.log('data', data);
    // 按照作者去搜索
    let result = []
    if (data.value !== undefined) {
        BookModel.find({ author: data.value }, (err, docs) => {
            result = [...docs];
            BookModel.find({ bookName: data.value }, (err, docs) => {
                // console.log(docs)
                result = [...result, ...docs];
                if (result.length === 0) res.send({ msg: '没有找到该书籍', status: 0 })
                else res.send({ msg: '已经找到该书籍', status: 1, data: result })
            })
        })
    }
    else {
        BookModel.find({ author: data.author,bookName:data.bookName }, (err, docs) => {
            if(docs.length>0) res.send({ msg: '已经找到该书籍', status: 1, data: docs })
            else res.send({ msg: '没有找到该书籍', status: 0 })
        })
    }


}
module.exports = searchBookServer;