import { users } from "../models/usersModels.mjs";


export function getUserController (request,response){
    response.json(users);
}

export function postUserController (request, response) {
    users.push(request.body);
    response.sendStatus(201)
}