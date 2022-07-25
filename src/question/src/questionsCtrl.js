const mongoose = require("mongoose");
const QuestionsModel = mongoose.model("QuestionsModel");

exports.getAllQuestions = async (req, res) => {
    const questions = await QuestionsModel.find({});
    res.json(questions);
}

exports.getQuestionsByLabel = async (req, res) => {
    const { label } = req.body.req;
    const questions = await QuestionsModel.findOne({
        "label": label
    });
    if (!questions) throw "Does not exits.";
    res.json(questions);
}

exports.getQuestionsByID = async (req, res) => {
    const { id } = req.body.req;
    const questions = await QuestionsModel.findOne({
        id
    });
    if (!questions) throw "Does not exits.";
    res.json(questions);
}

exports.saveQuestions = async (req, res) => {
    console.log(req.body);
    const { label, question, answer } = req.body.req;

    const questionsExists = await QuestionsModel.findOne({
        "question": question
    });

    if (questionsExists) throw "same question already exits.";
    const questionsDetails = new QuestionsModel({
        label, question, answer
    });
    await questionsDetails.save();
    res.json({
        message: "questionsDetails  added successfully!",
        data: questionsDetails
    });
};

exports.updateQuestions = async (req, res) => {
    const query = { id: req.body.req.id}
    const questionsDetails = await QuestionsModel.findOneAndUpdate(
        query, { $set: { label: req.body.req.label, question: req.body.req.question,  answer: req.body.req.answer,}},);
    if (!questionsDetails) throw "questions details does not exist";
    res.json({
        message: "questionsDetails  updated successfully!",
        data : questionsDetails
    });
};

exports.deleteQuestions = async (req, res) => {
    const { id } = req.body.req;

    const questionsDetails = await QuestionsModel.deleteOne({
        id
    });

    if (!questionsDetails) throw "questions details not deleted";

    res.json({
        message: "questionsDetails  deleted successfully!",
    });
};