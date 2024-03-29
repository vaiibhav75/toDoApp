async function getTodos(token) {
    const response = await fetch("http://localhost:3000/todos", {
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
    const response = await fetch("http://localhost:3000/add",{
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
    const response = await fetch("http://localhost:3000/delete",{
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