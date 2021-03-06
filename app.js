var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//
// ANY NEW TABLE MUST BE ADDED HERE ----------------
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var jobsRouter = require("./routes/jobs");
var areasRouter = require("./routes/areas");
var chatRouter = require("./routes/chat");

//--------------------------------------------------
//
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//
// AND HERE ----------------------------------------
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);
app.use("/areas", areasRouter);
app.use("/chat", chatRouter);

// -------------------------------------------------
//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
