const fs = require("fs");
const todo = JSON.parse(fs.readFileSync("./dev-data/data/todo-simple.json"));

const getTaskByID = (req, res) => {
  console.log(req.params); //all the parameters that we define above "id" are stored here
  const id = req.params.id * 1;
  const todo_selected = todo.find((el) => el.id === id);

  //if (id > todo.length)
  if (!todo_selected) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      todo_selected,
    },
  });
};

module.exports = getTaskByID;
