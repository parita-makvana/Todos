const fs = require("fs");
const todo = JSON.parse(fs.readFileSync("./dev-data/data/todo-simple.json"));

//POST
//Function to add a new todo task
const addTask = (req, res) => {
  const newId = todo[todo.length - 1].id + 1; //fetching last id
  const newTodo = Object.assign({ id: newId }, req.body); //temp object
  todo.push(newTodo); //pushing into the todo array
  //saving to the json file
  fs.writeFile(
    "./dev-data/data/todo-simple.json",
    JSON.stringify(todo),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          todo: newTodo,
        },
      });
    }
  );
};

module.exports = addTask;
