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

var classes = [
  {
    name: "class1",
    students: [
      {
        name: "student1",
        present: true
      },
      {
        name: "student2",
        present: false
      }
    ]
  },
  {
    name: "class2",
    students: [
      {
        name: "student3",
        present: true
      },
      {
        name: "student4",
        present: false
      }
    ]
  }
]

/*{
  name: "class1",
  students: [
    {
      name: "student1",
      present: true
    },
    {
      name: "student2",
      present: false
    }
  ]
}*/

// int totalAttendees?

io.on("connection", client => {


  console.log("New client connected");

  /* Need to update both ClassView and StudyTime when student arrives/leaves */
  client.on('studentAction', data => {//message from studentHome. data = {className: geometry, student:{name: alenta, present: true}}
    let cls = classes.find(c => c.name === data.className);
    let student = cls.students.find(s => s.name === data.student.name);
    student.present = data.student.present;
    io.emit('notifyClass', cls.students) //notify teacher when he/she is creating session.
  })

  client.on("disconnect", (client) => {
    console.log("Client disconnected");
  });
});


app.get("/getClassNames", (req, res) => {
  let classNames = classes.map(cls => cls.name);
  res.send(classNames).status(200);
});

app.get("/getStudents", (req, res) => {
  let className = req.query.className;
  let cls = classes.find((c => c.name === className));
  res.send(cls.students).status(200);
});

app.post("/createClass", (req, res) => {
  let className = req.body.className;
  let students = req.body.students;

  classes.push({ "name": className, "students": students });

  res.send("Class created successfully").status(200);
});

app.post("/startClass", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.post("/endClass", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
