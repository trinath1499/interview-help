const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {   
        userEmail:{
            type: String
        },
        userName: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("AdminModel", adminSchema);