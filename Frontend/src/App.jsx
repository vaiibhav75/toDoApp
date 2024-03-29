import React, { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from "./loginPage/LoginPage.jsx";
import TodosPage from "./todosPage/TodosPage.jsx";



function App() {
    const [loggedIn, setLogin] = useState(false);
    const [token, setToken] = useState("");
    return (
        loggedIn ? <TodosPage token = {token}/> : <LoginPage setLogin = {setLogin} setToken = {setToken}/>
    )
}



export default App
