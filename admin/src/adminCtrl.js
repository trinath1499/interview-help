const mongoose = require("mongoose");
const AdminModel = mongoose.model("AdminModel");

exports.getAllAdmins = async (req, res) => {
    const admins = await AdminModel.find({});
    res.json(admins);
}

exports.getAdminByEmail = async (req, res) => {
    const { userEmail } = req.body.req;
    const admin = await AdminModel.findOne({
        userEmail
    });
    if (!admin) throw "Does not exits.";
    res.json(admin);
}

exports.getAdminByID = async (req, res) => {
    const { id } = req.body.req;
    const admin = await AdminModel.findOne({
        id
    });
    if (!admin) throw "Does not exits.";
    res.json(admin);
}

exports.saveAdmin = async (req, res) => {
    const { userEmail, userName } = req.body.req;

    const adminExists = await AdminModel.findOne({
        userEmail
    });

    if (adminExists) throw "same email already exits.";
    const adminDetails = new AdminModel({
        userEmail, userName
    });
    await adminDetails.save();
    res.json({
        message: "adminDetails  added successfully!",
        data: adminDetails
    });
};

exports.updateAdmin = async (req, res) => {
    const query = { userEmail: req.body.req.userEmail}
    const adminDetails = await AdminModel.findOneAndUpdate(
        query, { $set: { userName: req.body.req.userName }},);
    if (!adminDetails) throw "admin details does not exist";
    res.json({
        message: "adminDetails  updated successfully!",
        data : adminDetails
    });
};

exports.deleteAdmin = async (req, res) => {
    const { userEmail } = req.body.req;

    const adminDetails = await AdminModel.deleteOne({
        userEmail
    });

    if (!adminDetails) throw "admin details not deleted";

    res.json({
        message: "adminDetails  deleted successfully!",
    });
};