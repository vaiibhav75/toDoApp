# MERN ToDo App

This is a simple ToDo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to sign up, sign in, view their todos, add new todos, and delete existing todos.

Deployed link: [ToDo App](https://to-do-app-fronted.vercel.app/)

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
- **JWT (JSON Web Token):** Used for securely transmitting information between the client and server as a JSON object.

## Installation

1. Clone the repository:

   `git clone https://github.com/vaiibhav75/toDoApp.git`

2. Navigate to the project directory:

   `cd toDoApp`

## Backend setup
    Note - You can skip this step and use the already deployed version

1. Navigate to the `backend` directory:

   `cd backend`

2. Install the dependencies:

   `npm install`

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variable:
      - `MONGODB_URI`: URI for connecting to your MongoDB database.

4. Start the server:

   `node index.js`

5. The server should now be running on `http://localhost:3000`.

6. Copy the deployed link and paste it in the `frontend/src/config.js` file.

## Frontend setup

1. Navigate to the `frontend` directory:

   `cd frontend`

2. Install the dependencies:

   `npm install`

3. Start the development server:

   `npm run dev`

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to help improve this project.
