
import { tasks } from "../models/tasksModels.mjs"
import db from "../models/db.mjs";

//Mostrar una tarea
export function getOneTaskControllers (request,response){
  db.all (
    `SELECT id, description, done FROM tasks`,
    (err, data) => {
        if (err) {
            console.error(err);
            response.sendStatus(500)
        } else {
            response.json(data)
        }
    }
  )
  }
     



//Mostrar tareas
 export function getAllTaskControllers(request, response){
  db.all (
  `SELECT id, description, done FROM tasks`,
  (err, data) => {
      if (err) {
          console.error(err);
          response.sendStatus(500)
      } else {
          response.json(data)
      }
  }
)
}
   

//Añadir tareas
  export function postTaskControllers (request, response){
    const { description, done } = request.body;
    db.run(
        `INSERT INTO tasks(description, done) VALUES ("${description}", ${done})`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}
// Funcion Modificar tarea
  export function putTaskControllers(request, response){
    db.run(
      `UPDATE tasks SET description = "${request.body.description}" , done = ${request.body.done} WHERE id = "${request.body.id}"`,
      (err) => {
          if (err) {
              console.error(err);
              response.sendStatus(500)
          } else {
              response.sendStatus(200)
          }
      }
  )
}
// Funcion Eliminar tarea
   export function deleteTaskControllers (request, response){
    db.run(
      `DELETE FROM tasks WHERE id =`+request.body.id,
      (err) => {
          if (err) {
              console.error(err);
              response.sendStatus(500)
          } else {
              response.sendStatus(200)
          }
      }
  )
}