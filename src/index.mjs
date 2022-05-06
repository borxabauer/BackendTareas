import express from "express";
import { authMiddleware } from "./middleware/authorization.mjs";
import { getAllTaskControllers,getOneTaskControllers, postTaskControllers,putTaskControllers,deleteTaskControllers} from "./controllers/tasksControllers.mjs"
import { postUserController,getUserController,putUserController,deleteUserController } from "./controllers/usersControllers.mjs";
import { requestLog } from "./middleware/requestLog.mjs";
import { validateDeleteTaskJSON,validateNewTaskJSON,validateUserJSON,validateTaskJSON } from "./middleware/jsonValidator.mjs";
const app = express();
const PORT = 3000;



app.use(express.json());

try {
    const jsonParser = express.json();
    app.use(requestLog);
 // Usuarios
 app.get("/api/v0.0/users/",jsonParser,getUserController);
 app.post("/api/v0.0/users/",jsonParser,validateUserJSON, postUserController);
 app.put("/api/v0.0/users/",jsonParser,validateUserJSON, putUserController);
 app.delete("/api/v0.0/users/",jsonParser,validateUserJSON, deleteUserController);

//:id=parametro=pedir una tarea especifica dentro de la ruta de que tenga ese id
app.get("/api/v0.0/task/:id",authMiddleware,getOneTaskControllers);

//Mostrar tareas
 app.get("/api/v0.0/tasks/",authMiddleware, getAllTaskControllers);

   
//Añadir tareas
 app.post("/api/v0.0/task/",authMiddleware,jsonParser,validateNewTaskJSON, postTaskControllers);

    

//Modificar tarea
   app.put("/api/v0.0/task/",authMiddleware,jsonParser,validateTaskJSON, putTaskControllers);


// Eliminar tarea
   app.delete("/api/v0.0/task/",authMiddleware,jsonParser,validateDeleteTaskJSON, deleteTaskControllers);
   


    


app.listen(PORT,()=>{
    console.log("Express running...");
})

} catch (err) {
    console.error(err);
}