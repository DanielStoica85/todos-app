const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api");

// enable use of Promises instead of callbacks
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
