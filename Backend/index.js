// Express setup
const express = require('express');
const app = express();
const cors = require('cors');

// Body Parser
const bodyParser = require('body-parser');

// Import router
const todoRouter = require("./routes/todos");
const authRouter = require("./routes/authorisation");

// Routes setup
app.use(bodyParser.json());
app.use(cors());
app.use(authRouter);
app.use(todoRouter);


// Hosting server
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});