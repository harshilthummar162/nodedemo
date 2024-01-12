require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();
app.use(cors({ origin: "*" }));
// app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", require("./routes/index.js"));

app.use((req, res) => apiResponse.NOT_FOUND({ res, message: "Oops! Looks like you're lost." }));

// app.use(errorHandler);
module.exports = app;
