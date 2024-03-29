// Express setup
const { Router } = require("express");
const router = Router();

// Database setup
const Todos = require("../database/index");

// JWT setup
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

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

module.exports = router;