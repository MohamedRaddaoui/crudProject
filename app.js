var createError = require("http-errors");
var express = require("express");
var http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const joueurController = require("./controllers/joueurController");
require("./config/db");

var usersRouter = require("./routes/users");
var joueurRouter = require("./routes/joueur");
var partieRouter = require("./routes/partie");

var app = express();
const port = 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Require static assets from public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

// ROUTES
app.use("/users", usersRouter);
app.use("/user", joueurRouter);
app.use("/user1", partieRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// create server
var server = http.createServer(
  app,
  console.log(`Server Running On Port ${port}`)
);
server.listen(port);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");

  socket.emit("msg", "user connected");

  socket.on("partie", (data) => {
    console.log(data);
    io.emit("partie", data);
  });
  socket.on("stats", async (data) => {
    result = await joueurController.getStats(data.joueur1, data.joueur2);
    io.emit("stats", result);
  });

  socket.on("typing", (data) => {
    console.log(data);
    socket.broadcast.emit("typing", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");

    io.emit("msg", "user disconnected");
  });
});
module.exports = { app, io };
