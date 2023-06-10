const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

require("dotenv").config();

// routes
app.use("/api/v1/tasks", tasks);

// middleware
app.use(express.json());
app.use(express.static("./public"));
app.use(notFound);
app.use(errorHandlerMiddleware);

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
