import {AiOutlineDelete} from "react-icons/ai";
import {deleteTodo} from "./serverCalls.js";
import React from "react";

function Todo(props) {
    return (
        <div className="todo-list-item">
            <div>
                <h3>{props.todo.title}</h3>
                <p>{props.todo.description}</p>
            </div>
            <div>
                {" "}
                <AiOutlineDelete className="icon" onClick={async () => {
                    const todosData = await deleteTodo(props.token, props.todo._id);
                    await props.setTodos(todosData);
                }}/>

            </div>

        </div>
    );
}

export default Todo;