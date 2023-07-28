const express = require("express");
const connectDB = require("./src/db");

const dotenv = require("dotenv");
const { validateCourse, validateUpdateCourse } = require("./src/validators");


const app = express();
dotenv.config();
app.use(express.json());

connectDB();
let courses = [];
// Get all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});
// Create a new course
app.post("/api/courses", validateCourse, (req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res
    .status(201)
    .json({ message: "Data created successfully", data: newCourse });
});

app.put("/api/courses/:name", validateUpdateCourse, (req, res) => {
  const courseName = req.params.name;
  const updatedCourse = req.body;

  const index = courses.findIndex((course) => course.name === courseName);
  if (index !== -1) {
    courses[index] = { ...courses[index], ...updatedCourse };
  }

  res.json(courses[index]);
});
app.delete("/api/courses/:name", (req, res) => {
  const courseName = req.params.name;

  courses = courses.filter((course) => course.name !== courseName);
  res.json({ message: "Course deleted successfully" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 8000`);
});
