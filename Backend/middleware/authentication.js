// JWT setup
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function authentication (req, res, next) {

    const jwtToken = req.headers.authorization.split(" ")[1];

    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }

}

module.exports = authentication;