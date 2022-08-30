let mongoose = require('./db')
let objSchema = new mongoose.Schema({
    author: String,
    bookName: String,
    bookInfo: String,
    publisher: String,
    bookImg: String,
    bookNum: String,
});
let BookModel = mongoose.model("book", objSchema);
module.exports = BookModel;