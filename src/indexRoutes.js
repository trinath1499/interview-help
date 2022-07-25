const express = require('express');
const app = express();


app.use("/v1/questions", require("./question/src/questionsRoute"));
app.use("/v1/admin", require("./admin/src/adminRoute"));


module.exports = app;