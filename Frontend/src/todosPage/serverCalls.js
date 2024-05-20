import {config} from "../../config.js";

async function getTodos(token) {
    const response = await fetch(`${config.apiUrl}/todos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token // Make sure "Bearer" is capitalized
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }

    const responseData = await response.json();
    return responseData.todos;
}

async function addTodo (token, todo) {
    const response = await fetch(`${config.apiUrl}/add`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "title": todo.title,
            "description": todo.description
        })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    const responseData = await response.json();
    return responseData.todos;
}

async function deleteTodo (token, id) {
    const response = await fetch(`${config.apiUrl}/delete`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "id": id
        })
    });
    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    const responseData = await response.json();
    return responseData.todos;
}

export { getTodos, addTodo, deleteTodo };