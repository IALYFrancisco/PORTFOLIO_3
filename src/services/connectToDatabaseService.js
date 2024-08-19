const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

function dbConnexion() {
    mongoose.connect(process.env.DB_URI)
        .then(()=>{console.log("Connexion database OK")})
        .catch((error)=>{console.log(error)})
}

dbConnexion()