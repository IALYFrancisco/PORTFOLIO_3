const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

async function _Connection() {
    await mongoose.connect(process.env.DB_URI)
        .then(()=>{console.log("Connection database OK")})
        .catch((error)=>{console.log(error)})
}

async function _Disconnection() {
    await mongoose.disconnect()
        .then(()=>{console.log("Database disconnection successfully")})
        .catch((error)=>{console.log(error)})
}

module.exports = {
    connection : _Connection,
    disconnection : _Disconnection
}