const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json()); //middleware...in the middle of the requests

//top level code
const todo = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/todo-simple.json`)
);

//---------------------------------------------
//GET
//send back all the todo tasks for a users
app.get('/api/v1/todos', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: todo.length,
    data: {
      //envelope
      todo,
    },
  });
});

//-------------------------------------------
//GET Filtered ID todo
app.get('/api/v1/todos/:id', (req, res) => {
  console.log(req.params); //all the parameters that we define above "id" are stored here
  const id = req.params.id * 1;
  const todo_selected = todo.find((el) => el.id === id);

  //if (id > todo.length)
  if (!todo_selected) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo_selected,
    },
  });
});

//--------------------------------------------
//POST
//to add a new todo task
app.post('/api/v1/todos', (req, res) => {
  //console.log(req.body);

  const newId = todo[todo.length - 1].id + 1; //fetching last id
  const newTodo = Object.assign({ id: newId }, req.body); //temp object
  todo.push(newTodo); //pushing into the todo array
  //saving to the json file
  fs.writeFile(
    `${__dirname}/dev-data/data/todo-simple.json`,
    JSON.stringify(todo),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          todo: newTodo,
        },
      });
    }
  );
  //res.send('Done adding a new todo');
});

//--------------------------------------------
//PATCH
//UPDATE
app.patch('/api/v1/todos/:id', (req, res) => {
  if (req.params.id * 1 > todo.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo: '<Updated todo here...>',
    },
  });
});

//------------------------------------------------
//DELETE
app.delete('/api/v1/todos/:id', (req, res) => {
  if (req.params.id * 1 > todo.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  const idTodelete = req.params.id * 1;
  //   delete todo[idTodelete];

  let index = todo.findIndex((x) => x.id === idTodelete);
  console.log(`Todo with ID ${index} deleted successfully`);

  todo.splice(index, 1);

  fs.writeFile(
    `${__dirname}/dev-data/data/todo-simple.json`,
    JSON.stringify(todo),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          todo,
        },
      });
    }
  );

  //   res.status(204).json({
  //     status: 'success',
  //     data: null,
  //   });
  // console.log('Deleted succesfully');
});

//
//
//listener
const port = 3000;
app.listen(port, () => {
  console.log(`Todo App running on port ${port}...`);
});

//
//
//
//
//------------------------------------------------------------------------//
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
