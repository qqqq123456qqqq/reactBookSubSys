let mongoose = require('./db')
let objSchema = new mongoose.Schema({
    admin: String,
    author:String,
    bookName: String,
    date: String,
});
let DelBookModel = mongoose.model("delBookLogs",objSchema);
module.exports = DelBookModel;