require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
module.exports = {
    JWT_SECRET : "Complicated Key",
    MONGO_URI : MONGO_URI,
}