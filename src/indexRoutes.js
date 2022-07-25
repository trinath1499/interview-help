const express = require('express');
const app = express();


app.use("/v1/questions", require("./questions/src/questionsRoute"));
app.use("/v1/admin", require("./admin/src/adminRoute"));


module.exports = app;