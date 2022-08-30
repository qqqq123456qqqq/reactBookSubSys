const ChartModel = require("../src/db/crollChart");

const getcrollChartDataServer = (data,res)=>{
    ChartModel.find({},(err,docs)=>{
        console.log(err)
        res.send({msg:"获取成功",data:docs})
    })
}
module.exports = getcrollChartDataServer;