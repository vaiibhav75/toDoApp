// Express setup
const express = require('express');
const app = express();

// Body Parser
const bodyParser = require('body-parser');

// Import router
const router = require("./routes/user");

// Routes setup
app.use(bodyParser.json());
app.use(router);

// Hosting server
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});