const express = require("express");
const connectDB = require("./src/db");
const User = require("./src/model/model");
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

// Registration API endpoint
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 8000`);
});
