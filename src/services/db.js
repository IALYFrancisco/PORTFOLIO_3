const chalk = require('chalk')
const mongoose = require('mongoose')

function DbConnection() {
    mongoose.connect(process.env.DB_URI)
        .then(()=>{ console.log(chalk.bgHex('#098702ff').hex('#fffbfc')('Database connection success.')) })
        .catch((err)=>{ console.log('Database connection error :' + err) })
}

module.exports = {
    DbConnection: DbConnection
}