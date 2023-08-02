const express = require("express");
const connectDB = require("./src/db");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port 8000`);
});
