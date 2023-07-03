require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// database
const connectDB = require("./db/connect");

// Routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send("Ecommerce API");
});

app.get("/api/v1", (req, res) => {
  //   console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("Ecommerce API");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

start();
