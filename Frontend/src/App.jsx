import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [loggedIn, setLogin] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsername (event) {
        setUsername(event.target.value);
    }

    function handlePassword (event){
        setPassword(event.target.value);
    }

    function signInHandler () {

    }

    function signUpHandler () {

    }

    const [todo,setTodo] = useState([{
        title: "Hello",
        description: "7-9",
        completed: false
    }, {
        title: "Hello World",
        description: "7-9",
        completed: false
    }]);

    return (
        <div>
            <div>

                {todo.map((todo)=> {
                    return (
                        <Todo title = {todo.title} description = {todo.description}></Todo>
                    )
                })}
            </div>

            <div>
                <input id={"usernameInput"} value={username} onChange={handleUsername} />
                <br/>
                <input id={"passwordInput"} value={password} onChange={handlePassword} />
                <br/>
                <button onClick={signInHandler}>Sign In</button>
                <button onClick={signUpHandler}>Sign Up</button>
            </div>
        </div>

    )



}




function Todo (props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <button>Delete</button>
        </div>
    )
}

export default App
