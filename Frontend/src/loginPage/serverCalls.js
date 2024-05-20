import {config} from "../../config.js";

async function signInHandler(data, props){
    const response = await fetch(`${config.apiUrl}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Specify content type as JSON
        },
        body: JSON.stringify({
            "username": data.username,
            "password": data.password
        })
    });

    if (response.status !== 200) {
        await props.setLogin(true);
    }

    const responseData = await response.json();
    await props.setToken(responseData.userToken);

}

async function signUpHandler(data, props) {
    const response = await fetch(`${config.apiUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Specify content type as JSON
        },
        body: JSON.stringify({
            "username": data.username,
            "password": data.password
        })
    });
    await signInHandler(data, props);
}

export { signInHandler, signUpHandler };