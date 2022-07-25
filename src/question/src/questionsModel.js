const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
    {   
        label:{
            type: String
        },
        question: {
            type: String
        },
        answer: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("QuestionsModel", questionsSchema);