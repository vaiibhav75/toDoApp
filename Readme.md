# MERN ToDo App

This is a simple ToDo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to sign up, sign in, view their todos, add new todos, and delete existing todos.

## Features

- **Sign Up:** Users can create a new account by providing their email and password.
- **Sign In:** Existing users can sign in to their accounts securely.
- **Get Todos:** Once logged in, users can view their existing todos.
- **Add Todo:** Users can add new todos with a title and description.
- **Delete Todo:** Users can delete todos they no longer need.

## Technologies Used

- **MongoDB:** Used as the database to store user information and todos.
- **Express.js:** Backend framework for handling HTTP requests and routes.
- **React.js:** Frontend framework for building the user interface.
- **Node.js:** JavaScript runtime environment for running server-side code.

## Installation

1. Clone the repository:

`git clone https://github.com/yourusername/mern-todo-app.git`


2. Navigate to the project directory:

`cd mern-todo-app`

3. Install dependencies:

`npm install`

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        - `MONGODB_URI`: URI for connecting to your MongoDB database.
        - `JWT_SECRET`: Secret key for JWT token generation.

5. Start the application:

`npm start`

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to help improve this project.
