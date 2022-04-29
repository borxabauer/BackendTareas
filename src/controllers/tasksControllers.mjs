
import { response } from "express";
import { tasks } from "../models/tasksModels.mjs"



export function getOneTaskControllers (request,response)
try{
  const task=task.find(
    item=>item.id ===parseInt(request.param.id)
  )
  if(task) response.json(task)
  else response.sendStatus(404);
} catch (err) {
  response.sendStatus(400)
}
  


//Mostrar tareas
 export function getAllTaskControllers(request, response){
    response.json(tasks)
};

//Añadir tareas
  export function postTaskControllers (request, response){
    try{
    tasks.push(request.body);
    response.sendStatus(201);
    } catch (err){
      console.error(err);
      response.sendStatus(500);
    }
};

// Funcion Modificar tarea
  export function putTaskControllers(request, response){
    try{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
   }catch (err){
     console.error(err);
     response.sendStatus(501);
   }
  }
// Funcion Eliminar tarea
   export function deleteTaskControllers (request, response){
     try{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200);
     }catch (err){
       console.error(err);
       response.sendStatus(500);
     }
}