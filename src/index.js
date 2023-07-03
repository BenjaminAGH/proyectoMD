// const express = require('express');
// const { v4: uuidv4 } = require('uuid');
// const app = express();
// const port = 3000;

// app.use(express.json());

// //UUID
// const ranId = uuidv4();

// let tasks = [
//   { 
//     id: ranId, 
//     name: 'unknown',
//     type: 'unknown',
//     description: 'unknown',
//     completed: false,
//   },
// ];

// //leer tarea
// app.get('/tasks',function(request,response){
//   response.status(200).json(tasks);
// });

// //crear tarea
// app.post('/tasks',function(request,response){
//   const {name, type, description} = request.body;
//   const newTask = {
//     id: ranId,
//     name,
//     type,
//     description,
//     completed: false,
//   };
  
//   tasks.push(newTask);
//   response.status(201).json(newTask);

// });

// //editar tarea
// app.put('/tasks/:id',function(request,response){
//   const taskID = request.params.id;
//   const {name, type, description, completed} = request.body;
//   const task = tasks.find((task) => task.id === taskID);
//   if(!task){
//     return response.status(404).json({message: 'Task not found'});
//   }
//   task.name = name;
//   task.type = type;
//   task.description = description;
//   task.completed = completed;
//   response.json(task);

// });

// //eliminar tarea
// app.delete('/tasks/:id',function(request,response){
//   const taskID = request.params.id;
//   const index = tasks.findIndex((task) => task.id === taskID);
//   if (index === -1){
//     return response.status(404).json({message: 'Task not found'});
//   }
//   task.splice(index,1);
//   response.sendStatus(204);

// });

// app.listen(port,()=>{
//     console.log(`Example app listening at http://localhost:${port}`);
// });
