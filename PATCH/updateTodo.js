const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

const todo = JSON.parse(fs.readFileSync("./dev-data/data/todo-simple.json"));

const updateTodo = (req, res) => {
  const id = req.params.id * 1;
  if (id > todo.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  const update = req.body.status;
  let index = todo.findIndex((x) => x.id === id);
  todo[index].status = update;

  console.log(`Todo with ID ${index} updated successfully`);

  fs.writeFile(
    "./dev-data/data/todo-simple.json",
    JSON.stringify(todo),
    (err) => {
      res.status(200).json({
        status: "success",
      });
    }
  );
};

module.exports = updateTodo;
