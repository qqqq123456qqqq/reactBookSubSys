const BookModel = require("../src/db/book");

const changeBookServer = (data,res)=>{
    // console.log(data);
    BookModel.updateOne({author:data.preauthor,bookName:data.prebookName},
        {
                author: data.author,
                bookName: data.bookName,
                bookInfo: data.bookInfo,
                publisher: data.publisher,
                bookNum: data.bookNum,
                bookImg: data.bookImg,
        }).then(doc=>{
        if(doc.modifiedCount>0) res.send({msg:"修改成功",status:1})
        // else res.send({msg:"修改成功",status:1})
    })
}
module.exports = changeBookServer;