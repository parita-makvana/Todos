TODO LIST APPLICATION

This is a Todo list appliction made with the help of node.js and Express.
The aim was to create all the required API call methods such that while hitting those API's the data is stored or fetched
from a file sysem (modules) rather than a database system.

There are four folders under the Todo postman collection namely:
GET
-This contains 2 API's:
1.To get the list of all the tasks. (getAllTask.js)
2.To get a task by specifying its ID. (getTaskByID.js)
*The url to hit the GET API (to get all the task) in the postman: http://127.0.0.1:3000/api/v1/todos
*The url to hit the GET API (to get a task by ID) in the postman: http://127.0.0.1:3000/api/v1/todos/?:id

POST
-This will create a new task and will add it to the file system. This will automatically fetch the last task ID and will increment it
by one to auto assign the new ID to a newly added task.
(addTask.js)
The url to hit the POST API in the postman: http://127.0.0.1:3000/api/v1/todos

PATCH
-This will take ID as an input from the url's endpoint and will update its status follwed by writng back to the json file.
(updateTask.js)
The url to hit the PATCH API in the postman: http://127.0.0.1:3000/api/v1/todos/?:id

DELETE
-This will take ID as an input from the url's endpoint and will delete that todo. For this purpose, I have used SPLICE.
(deleteTask.js)
The url to hit the DELETE API in the postman: http://127.0.0.1:3000/api/v1/todos/?:id

Lastly, I have used refactoring and modularizaion in order to segregate the code for all the four API methods and calling those functions
from app.js main file.
