require("./config/dbConfig"); // ADD - db config is done
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { normalize } = require("path");
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const cors = require("cors"); // ADD
const app = express();

app.use(cors({ origin: "http://localhost:3000" })); // ADD -
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ADD - Let's prefixe the route with /api and require the path for the route...
app.use("/api", require("./routes/firebird.route"));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

module.exports = app;
