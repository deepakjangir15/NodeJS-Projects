const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Sever is listening ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
// middleware
app.use(express.json());

// routes
app.get("/hello", (request, response) => {
  response.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
