const dotenv = require('dotenv')
const { EDOTASK } = require('./services/services')
const { DbConnection } = require('../src/services/db')
const { disconnect } = require('mongoose')

dotenv.config()

try {
    DbConnection()
    EDOTASK()
}catch(_error){
    console.log({
        message : "Failed to create superuser.",
        error : _error
    })
}finally{
    await disconnect()
}