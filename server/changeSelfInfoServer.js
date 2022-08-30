const AdminModel = require("../src/db/admin");
const UserModel = require("../src/db/user");

const changeSelfInfoServer = (data, res) => {
    console.log(data);
    if (data !== null) {
        let model;
        if (data.values.identify === 'admin') {
            model = AdminModel;
        }
        if (data.values.identify === 'user') {
            model = UserModel;
        }
        model.updateOne({ username: data.values.username },
            {
                username: data.values.username,
                phone: data.values.phone,
                email: data.values.email,
                password: data.values.password,
                identify: data.values.identify,
                jobnum: data.values.jobnum

            }).then(doc => {
                if (doc.modifiedCount > 0) res.send({ msg: "修改成功", status: 1 })
                // else res.send({msg:"修改成功",status:1})
            })
    }

}
module.exports = changeSelfInfoServer;