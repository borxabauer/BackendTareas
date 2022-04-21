import express from "express";
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
        description:"Comprar tostadas",
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

app.use(express.json())

//Mostrar tareas
    app.get("/api/v0.0/tasks/",(request, response)=>{
    response.json(tasks)
})
//Añadir tareas
    app.post("/api/v0.0/task/",(request, response)=>{
    tasks.push(request.body);
    response.sendStatus(201);
})

//Modificar tarea
    app.put("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
})
// Eliminar tarea
    app.delete("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200)
})




app.listen(PORT,()=>{
    console.log("Express running...");
})