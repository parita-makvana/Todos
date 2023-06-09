const fs = require("fs");
const todo = JSON.parse(fs.readFileSync("./dev-data/data/todo-simple.json"));

const deleteTask = (req, res) => {
  if (req.params.id * 1 > todo.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  const idTodelete = req.params.id * 1;
  //   delete todo[idTodelete]; //this not working properly as it was only truncating, leaving NULL behind

  let index = todo.findIndex((x) => x.id === idTodelete);
  console.log(`Todo with ID ${index} deleted successfully`);

  todo.splice(index, 1); //SPLICE

  fs.writeFile(
    "./dev-data/data/todo-simple.json",
    JSON.stringify(todo),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          todo,
        },
      });
    }
  );
};

module.exports = deleteTask;
