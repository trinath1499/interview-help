const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandler");
const questionsController = require("./questionsCtrl");

//net to check authorization

router.post("/getQuestionsByLabel", catchErrors(questionsController.getQuestionsByLabel));
router.post("/getQuestionsByID", catchErrors(questionsController.getQuestionsByID));
router.get("/getAllQuestions", catchErrors(questionsController.getAllQuestions));
router.post("/add", catchErrors(questionsController.saveQuestions));
router.put("/updateQuestions", catchErrors(questionsController.updateQuestions));
router.delete("/deleteQuestions", catchErrors(questionsController.deleteQuestions));

module.exports = router;