import React, {useEffect, useState} from "react";
import {getTodos} from "./serverCalls.js";
import Todo from "./ToDo.jsx";
import AddTodo from "./AddTodo.jsx";

function TodosPage(props) {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        const fetchTodos = async () => {
            const todosData = await getTodos(props.token);
            setTodos(todosData);
        };

        fetchTodos();
    }, [props.token]);

    return (
        <div className ="App">
            <h1>My ToDos</h1>
            <div className="todo-wrapper">
                <AddTodo token={props.token} setTodos={setTodos} />


                <div className="todo-list">
                    {todos.map(todo => (
                        <Todo key={todo._id} todo={todo} token={props.token} setTodos={setTodos} />
                    ))}
                </div>
            </div>

        </div>
    );
}






export default TodosPage;
