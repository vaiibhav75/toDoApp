// Mongoose Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vaiibhav75:PNNKbByUjLpdmGiq@clustervaiibhav.3e4ksft.mongodb.net/todo_app');

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