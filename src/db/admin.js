var mongoose = require('./db.js');
var objSchema = new mongoose.Schema({
    username: String,
    password: String,
    jobnum:String,
    identify: String,
    phone: String,
    email: String,
});
let AdminModel = mongoose.model("admin",objSchema);
module.exports = AdminModel;