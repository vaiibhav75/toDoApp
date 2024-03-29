async function signInHandler(data, props){
    const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Specify content type as JSON
        },
        body: JSON.stringify({
            "username": data.username,
            "password": data.password
        })
    });
    const responseData = await response.json();
    await props.setToken(responseData.userToken);
    await props.setLogin(true);
}

async function signUpHandler(data, props) {
    const response = await fetch("http://localhost:3000/signup", {
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

export {signInHandler, signUpHandler};