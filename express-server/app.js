const express = require("express");

const connectDB = require("./src/db");
const userRoutes = require("./src/routes/userRoutes");

const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());
app.use("/api/user", userRoutes);
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 8000`);
});
