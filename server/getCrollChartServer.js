const ChartModel = require("../src/db/crollChart");

const getCrollChartServer = (data,res)=>{
    console.log(data);
    ChartModel.find({identify:'crollChart'},(err,docs)=>{
        res.send({data:docs})
    })
}
module.exports = getCrollChartServer;