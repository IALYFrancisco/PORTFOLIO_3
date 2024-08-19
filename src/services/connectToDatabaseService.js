const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

function dbConnection() {
    mongoose.connect(process.env.DB_URI)
        .then(()=>{console.log("Connection database OK")})
        .catch((error)=>{console.log(error)})
}

module.exports = dbConnection