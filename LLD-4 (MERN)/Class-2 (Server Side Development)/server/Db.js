const mongoose = require("mongoose");

const dbString =
  "mongodb+srv://mrinal1224:ksU4z4bobejQnmQw@cluster0.tx2gb.mongodb.net/myEducationPlatform?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Connection Succesfull");
   
  })
  .catch((err) => {
    console.log("Connection Unsuccessful ", err);
  });

// create a schema with mongoose

const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  ratings: Number,
  isPublished: Boolean,
  releaseDate: { type: Date, default: Date.now() },
});

// Model for Course

let CourseModel = mongoose.model("course", courseSchema);

async function createCourse() {
  let newCourse = new CourseModel({
    name: "Java",
    creator: "Brijesh",
    ratings: 4.8,
    isPublished: false,
  });

  await newCourse.save()
  console.log('Data Saved')


}

createCourse()


