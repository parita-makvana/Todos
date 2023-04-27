//GET
//send back all the todo tasks for a user

const fs = require("fs");
const todo = JSON.parse(fs.readFileSync("./dev-data/data/todo-simple.json"));

const getAllTask = (req, res) => {
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
module.exports = getAllTask;
