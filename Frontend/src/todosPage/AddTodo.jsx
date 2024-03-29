import React, {useState} from "react";
import {addTodo} from "./serverCalls.js";

function AddTodo (props) {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    async function addTodoHandler() {
        const todosData = await addTodo(props.token, {title, description});
        props.setTodos(todosData);
    }


    return (

        <div className="todo-input">
            <div className="todo-input-item">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="What is your task title"></input>
            </div>
            <div className="todo-input-item">
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter task discription"></input>
            </div>
            <div className="todo-input-item">
                <button
                    type="button"
                    onClick={addTodoHandler}
                    className="primaryBtn">
                    Add
                </button>
            </div>
        </div>

    );
}

export default AddTodo;