const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

let isConnected = false

async function _Connection() {
    if(!isConnected){
        await mongoose.connect(process.env.DB_URI)
            .then(()=>{
                isConnected = true
                console.log("Connection database OK")
            })
            .catch((error)=>{console.log(error)})
    }
}

async function _Disconnection() {
    if(isConnected){
        await mongoose.disconnect()
            .then(()=>{
                isConnected = false
                console.log("Database disconnection successfully")
            })
            .catch((error)=>{console.log(error)})
    }
}

module.exports = {
    connection : _Connection,
    disconnection : _Disconnection
}