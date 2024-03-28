import {useState} from "react";

function LoginPage (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleUsername (event) {
        await setUsername(event.target.value);
    }

    async function handlePassword (event){
        await setPassword(event.target.value);
    }

    async function signInHandler () {
        const response = await fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify content type as JSON
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const responseData = await response.json();
        await props.setToken(responseData.userToken)
        await props.setLogin(true);
    }

    async function signUpHandler () {
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify content type as JSON
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        await signInHandler();
    }

    return (
        <div style={styles.container}>
            <input
                id="usernameInput"
                value={username}
                onChange={handleUsername}
                style={styles.input}
                placeholder="Username"
            />
            <br />
            <input
                id="passwordInput"
                type="password"
                value={password}
                onChange={handlePassword}
                style={styles.input}
                placeholder="Password"
            />
            <br />
            <button onClick={signInHandler} style={styles.button}>Sign In</button>
            <button onClick={signUpHandler} style={styles.button}>Sign Up</button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        margin: "20px auto",
        maxWidth: "300px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
        boxSizing: "border-box",
    },
    button: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
    },
};

export default LoginPage;