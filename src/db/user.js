let mongoose = require('./db')
let objSchema = new mongoose.Schema({
    username: String,
    password: String,
    jobnum: String,
    identify: String,
    phone: String,
    email: String,
});
let UserModel = mongoose.model("user",objSchema);
module.exports = UserModel;