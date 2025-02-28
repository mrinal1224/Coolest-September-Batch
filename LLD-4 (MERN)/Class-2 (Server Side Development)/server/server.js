const express = require("express");

const app = express();

app.use(express.json()); // built in middleware

const courses = [
  { id: 1, name: "java" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Python" },
];

// I want to hit on `/courses` ,
// I want to send the complete courses data

app.get("/courses", (req, res) => {
  res.send(courses);
});

// get a specific course

app.get("/courses/:id", (req, res) => {
  console.log(req.params);
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  console.log(course); // undefined null , 0 - false

  if (!course) {
    res.status(404).send("Did not find the Course");
  }

  res.send(course);
});

// post method

// create a course

app.post("/courses", (req, res) => {
  const course = {
    id: req.body.id,
    name: req.body.name,
  };

  courses.push(course);

  res.send(courses);
});


// update the name of the course `Java` 
// and change it to `Java with SpringBoot`
// put

app.put('/courses/:id' , (req , res)=>{
    let course = courses.find((course) => course.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send("Did not find the Course to update");
      }

    course.name = req.body.name

    res.send(course)
})

// delete 

app.delete('/courses/:id' , (req , res)=>{
    let course = courses.find((course) => course.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send("Did not find the Course to delete");
      }

    const index = courses.indexOf(course)
    // 0

    courses.splice(index , 1)//

    res.send(course)
})





app.listen(8005, () => {
  console.log(`Server Started on port 8005`);
});
