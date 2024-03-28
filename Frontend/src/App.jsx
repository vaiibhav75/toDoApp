import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from "./LoginPage.jsx";
import {getTodos, addTodo, deleteTodo} from "./api.js";

function App() {
    const [loggedIn, setLogin] = useState(false);
    const [token, setToken] = useState("");
    return (
        loggedIn ? <ToDosPage token = {token}/> : <LoginPage setLogin = {setLogin} setToken = {setToken}/>
    )

}

function ToDosPage(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todosData = await getTodos(props.token);
            setTodos(todosData);
        };

        fetchTodos();
    }, [props.token]);

    return (
        <div style={styles.container}>
            <AddTodo token={props.token} setTodos={setTodos} />
            <h1>My ToDos</h1>
            <div>
                {todos.map(todo => (
                    <Todo key={todo._id} todo={todo} token={props.token} setTodos={setTodos} />
                ))}
            </div>
        </div>
    );
}

function Todo(props) {
    return (
        <div style={styles.todoContainer}>
            <h1 style={styles.todoTitle}>{props.todo.title}</h1>
            <h2 style={styles.todoDescription}>{props.todo.description}</h2>
            <button
                style={styles.todoButton}
                onClick={async () => {
                    const todosData = await deleteTodo(props.token, props.todo._id);
                    await props.setTodos(todosData);
                }}
            >
                Delete
            </button>
        </div>
    );
}

function AddTodo (props) {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    async function handleTitle(event) {
        await setTitle(event.target.value);
    }

    async function handleDescription(event) {
        await setDescription(event.target.value);
    }

    async function addTodoHandler() {
        // console.log({title, description});
        const todosData = await addTodo(props.token, {title, description});
        // console.log(todosData);
        props.setTodos(todosData);
    }
    return (
        <div style={styles.container2}>
            <input
                style={styles.input}
                placeholder="Title"
                value={title}
                onChange={handleTitle}
            />
            <br />
            <input
                style={styles.input}
                placeholder="Description"
                value={description}
                onChange={handleDescription}
            />
            <br />
            <button
                style={styles.button}
                onClick={addTodoHandler}
            >
                Add Todo
            </button>
        </div>
    );
}



const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    todoContainer: {
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#333',
        borderRadius: '4px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    todoTitle: {
        fontSize: '20px',
        marginBottom: '5px',
        color: '#fff',
    },
    todoDescription: {
        fontSize: '16px',
        color: '#ccc',
        marginBottom: '10px',
    },
    todoButton: {
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#333',
        width: '300px',
        margin: '0 auto',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #555',
        backgroundColor: '#444',
        color: '#fff',
        fontSize: '16px',
        boxSizing: 'border-box',
        outline: 'none',
    },
    button: {
        width: '100%',
        padding: '12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        outline: 'none',
    },
};




export default App
