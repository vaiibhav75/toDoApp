// Express setup
const { Router } = require("express");
const router = Router();

// Database setup
const Todos = require("../database/index");

// JWT setup
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware setup
const authentication = require('../middleware/authentication');

router.post("/signup", async (req,res) => {
    await Todos.create({
        username:req.body.username,
        password: req.body.password,
        todos: []
    })


    res.status(200).json({
        msg:"done"
    });
})

router.post("/signin", async (req,res) => {
    const user = Todos.findOne({
        username:req.body.username,
        password: req.body.password
    })

    if (user) {
        const userToken = jwt.sign({
            username: req.body.username
        },JWT_SECRET);
        res.status(200).json({userToken});
    } else {
        res.status(403).json({
            msg: "Not valid"
        });
    }
})


router.put("/delete", authentication, async (req,res) => {

    const jwtToken = req.headers.authorization.split(" ")[1];
    const username = jwt.verify(jwtToken, JWT_SECRET).username;
    const user = await Todos.findOne({username});

    const id = req.body.id;
    const todos = user.todos;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos.splice(i,1);
            break;
        }
    }

    await Todos.updateOne({username},{todos});

    res.json({
        todos: user.todos
    })
});

router.put("/add", authentication, async (req,res) => {

    const jwtToken = req.headers.authorization.split(" ")[1];
    const username = jwt.verify(jwtToken, JWT_SECRET).username;
    const user = await Todos.findOne({username});

    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const todos = user.todos;
    todos.push({id,title,description});

    await Todos.updateOne({username},{todos});

    res.json({
        todos: user.todos
    })
});

router.get("/todos", authentication, async (req,res) => {

    const jwtToken = req.headers.authorization.split(" ")[1];
    const username = jwt.verify(jwtToken, JWT_SECRET).username;
    const user = await Todos.findOne({username});

    res.json({
        todos: user.todos
    })
});



// Export router
module.exports = router;