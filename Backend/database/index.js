// Mongoose Setup
const mongoose = require('mongoose');
const {MONGO_URI} = require('../config')
mongoose.connect(MONGO_URI);

// Schema definition
const ToDoSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos:[{
        title: String,
        description: String
    }]
});

// Model Creation and export
const Todos =mongoose.model('Todos',ToDoSchema);
module.exports = Todos;