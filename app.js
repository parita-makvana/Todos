const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json()); //middleware...in the middle of the requests and response

//CREATING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//top level code
const todo = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/todo-simple.json`)
);

//GET
const getAllTodo = require(`${__dirname}/GET/getAllTodo.js`);

//GET Filtered ID todo
const getOneTodo = require(`${__dirname}/GET/getOneTodo.js`);

//POST
const addTodo = require(`${__dirname}/POST/addTodo.js`);

//PATCH UPDATE
const updateTodo = require(`${__dirname}/PATCH/updateTodo.js`);

//DELETE
const deleteTodo = require(`${__dirname}/DELETE/deleteTodo.js`);

//--------REFACTORING----------------
// app.get("/api/v1/todos", getAllTodo);
// app.get("/api/v1/todos/:id", getOneTodo);
// app.post("/api/v1/todos", addTodo);
// app.patch("/api/v1/todos/:id", updateTodo);
// app.delete("/api/v1/todos/:id", deleteTodo);

app.route("/api/v1/todos").get(getAllTodo).post(addTodo);

app
  .route("/api/v1/todos/:id")
  .get(getOneTodo)
  .patch(updateTodo)
  .delete(deleteTodo);

//
//----------
//listener
const port = 3000;
app.listen(port, () => {
  console.log(`Todo App running on port ${port}...`);
});

//
//
//
//
//-----------------------------PRACTICE-------------------------------------------//
// //root url
// //http method: GET
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ Message: 'Hello from the server side!!', app: 'Notours' }); //this response is sent only when a get method is sent to our server on the url
// });

// //http method: POST
// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint!!');
// });

// //listener
// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
