let mongoose = require('./db')
let objSchema = new mongoose.Schema({
    id:String,
    author: String,
    bookName: String,
    bookInfo: String,
    publisher: String,
    bookImg: String,
    bookNum: String,
});
let ChartModel = mongoose.model("Chart", objSchema);
module.exports = ChartModel;