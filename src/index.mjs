import express from "express";
import { authMiddleware } from "./middleware/authorization.mjs";
import { getTaskControllers,postTaskControllers,putTaskControllers,deleteTaskControllers} from "./controllers/tasksControllers.mjs"
import { postUserController,getUserController,putUserController,deleteUserController } from "./controllers/usersControllers.mjs";
import { requestLog } from "./middleware/requestLog.mjs";
import { validateDeleteTaskJSON,validateNewTaskJSON,validateUserJSON,validateTaskJSON } from "./middleware/jsonValidator.mjs";
const app = express();
const PORT = 3000;

const tasks=[
    {
        id:0,
        description:"Comprar pan",
        done:false

    },

    {
        id:1,
        description:"Comprar galletas",
        done:false

    },

    {
        id:2,
        description:"Comprar pescado",
        done:false
    },

    {

        id:3,
        description:"Comprar carne",
        done:false
    }
    

]


app.use(express.json());

try {
    const jsonParser = express.json();
    app.use(requestLog);
 // Usuarios
 app.get("/api/v0.0/users/",jsonParser,getUserController);
 app.post("/api/v0.0/users/",jsonParser,validateUserJSON, postUserController);
 app.put("/api/v0.0/users/",jsonParser,validateUserJSON, putUserController);
 app.delete("/api/v0.0/users/",jsonParser,validateUserJSON, deleteUserController);

//Mostrar tareas
 app.get("/api/v0.0/task/",authMiddleware, getTaskControllers);

   
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