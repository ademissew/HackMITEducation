const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const cors = require('cors');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server);

var teachers = {
  alenta: {
    class1: {
      students: ["id1", "id2", "id3"]
    }
  }
}

io.on("connection", client => {
  console.log("New client connected");

  client.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("/getClasses", (req, res) => {
  let teacher = req.query.teacher.toLowerCase();
  if (teacher in teachers) {
    res.send(teachers[teacher]).status(200);
  } else {
    res.send("Teacher does not exist").status(200);
  }
});

app.post("/createClass", (req, res) => {
  let teacher = req.body.teacher.toLowerCase();
  let className = req.body.className;
  let students = req.body.students;

  teachers[teacher][className] = students;
  res.send("Class created successfully").status(200);
});

app.post("/startClass", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.post("/endClass", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.post("/addStudent", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.put("/changeActivity", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
