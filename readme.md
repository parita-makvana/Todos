TODO LIST APPLICATION

This is a Todo list appliction made with the help of node.js and Express.
The aim was to create all the required API call methods such that while hitting those API's the data is stored or fetched
from a file sysem (modules) rather than a database system.

There are four postman collections and similarly four code folders namely:
GET
-This contains 2 API's:
1.To get the list of all the todos. (getAllTodo.js)
2.To get a todo by specifying its ID. (getOneTodo.js)

POST
-This will create a new todo and will add it to the file system. This will automatically fetch the last todo ID and will increment it
by one to auto assign the new ID to a newly added todo.
(addTodo.js)

PATCH
-This will take ID as an input from the url's endpoint and will update its status follwed by writng back to the json file.
(updateTodo.js)

DELETE
-This will take ID as an input from the url's endpoint and will delete that todo. For this purpose, I have used SPLICE.
(deleteTodo.js)

Lastly, I have used refactoring and modularizaion in order to segregate the code for all the four API methods and calling those functions
from app.js main file.
