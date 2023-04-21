//GET
//send back all the todo tasks for a user

const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

const todo = JSON.parse(fs.readFileSync("./dev-data/data/todo-simple.json"));

const getAllTodo = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: todo.length,
    data: {
      //envelope
      todo,
    },
  });
};
module.exports = getAllTodo;
