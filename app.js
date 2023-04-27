const express = require("express");
const app = express();
app.use(express.json()); //middleware...in the middle of the requests and response

//CREATING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//GET
const get_All_Task = require(`${__dirname}/getAllTask.js`);

//GET Filtered ID todo
const get_Task_By_ID = require(`${__dirname}/getTaskByID.js`);

//POST
const addTask = require(`${__dirname}/addTask.js`);

//PATCH UPDATE
const update_Task_By_ID = require(`${__dirname}/updateTask.js`);

//DELETE
const delete_Task_By_ID = require(`${__dirname}/deleteTask.js`);

//
//
//--------REFACTORING----------------

app.route("/api/v1/todos").get(get_All_Task).post(addTask);

app
  .route("/api/v1/todos/:id")
  .get(get_Task_By_ID)
  .patch(update_Task_By_ID)
  .delete(delete_Task_By_ID);

//
//----------
//listener
const port = 3000;
app.listen(port, () => {
  console.log(`Todo App running on port ${port}...`);
});
