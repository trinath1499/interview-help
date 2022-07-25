require("dotenv").config();
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 80;
const mongoose = require("mongoose");

require("./src/indexModels");

//Database connections
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
mongoose.connection.on('error', (err) => {
  console.log("mongoose error");
});
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/support', (req, res) => {
  res.sendFile(__dirname + '/html/support.html');
});

app.get('/candidate', (req, res) => {
  res.sendFile(__dirname + '/html/candidate.html');
});

app.get('/js-interview-questions', (req, res) => {
  res.sendFile(__dirname + '/data/js.json');
});

app.get('/java-interview-Questions', (req, res) => {
  res.sendFile(__dirname + '/data/java.json');
});

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/test.html');
});

app.get('/questions/lang/:tech', (req, res) => {
  res.sendFile(__dirname + '/html/questions.html');
});

app.get('/questions/add', (req, res) => {
  res.sendFile(__dirname + '/html/addQuestions.html');
});

app.use("/api", require("./src/indexRoutes"));

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    console.log(msg);
    io.emit('chat message', msg);
  });

  socket.on('show this', msg => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});