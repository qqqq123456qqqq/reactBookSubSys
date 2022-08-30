let mongoose = require('./db')
let objSchema = new mongoose.Schema({
      applyPerson: String,
      applyBook: String,
      applyBookTime: String,
      subStartTime: String,
      subEndTime: String,
      subStatus:String,
      optionPerson:String
});
let SubApplyListModel = mongoose.model("subApplyList",objSchema);
module.exports = SubApplyListModel;