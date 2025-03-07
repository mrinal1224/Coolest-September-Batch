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

async function updateCourse(id){
    let course = await CourseModel.findById(id)
     if(!course){
        console.log('No Course Found')
        return
     }
     course.isPublished = true
     course.name= 'Java with SQL'

     await course.save()
}

async function deleteCourse(id){
    let course = await CourseModel.findByIdAndDelete(id)
    if(!course){
       console.log('No Course Found')
       return
    }

    console.log('Course Deleted')
}

// createCourse()

// updateCourse('67c5e194cb98e41fcbe945a9')

deleteCourse('67c5e194cb98e41fcbe945a9')


