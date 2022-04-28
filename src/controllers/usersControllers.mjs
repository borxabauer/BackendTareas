import { users } from "../models/usersModels.mjs";


export function getUserController (request,response){
    response.json(users);
}

export function postUserController (request, response) {
    users.push(request.body);
    response.sendStatus(201)
}

export function putUserController (request,response){
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
}

export function deleteUserController(request,response){

    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200);
}