import { useState } from "react";
import { signInHandler, signUpHandler } from "./serverCalls.js";

function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <input
                id="usernameInput"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="input"
                placeholder="Username"
            />
            <br />
            <input
                id="passwordInput"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="input"
                placeholder="Password"
            />
            <br />
            <button
                onClick={() => signInHandler({username,password},props)}
                className="button"> Sign In
            </button>
            <button
                onClick={() => signUpHandler({username,password},props)}
                className="button"> Sign Up
            </button>
        </div>
    );
}


export default LoginPage;
