const dotenv = require('dotenv')
const { LDOTASK } = require('./services/services')
const { DbConnection } = require('../src/services/db')

dotenv.config()

try {
    DbConnection()
    LDOTASK()
}catch(_error){
    console.log({
        message : "Failed to create superuser.",
        error : _error
    })
}