const { Users } = require("../models/usersModel")
const { connection, disconnection } = require("../services/db")
const bcrypt = require('bcrypt')

function _goToLogin(request, response){
    response.render('Authentication/Login')
}

function _logout(request, response) {
    request.session.destroy(()=>{
        response.redirect("/authentication/login")
    })
}

async function _checkLogin(request, response){
    try {
        const { email, password } = request.body
        await connection()
        const user = await Users.findOne({email})
        await disconnection()
        if(!user){
            request.flash('error', "User doesn't exist!")
            return response.redirect("/authentication/login")
        }
        if(user && await comparePassword(password, user.password)){
            request.session.user = {name : user.name, email : user.email, role : user.role}
            return response.redirect("/backoffice")
        }else{
            request.flash('error', "Email or password incorrect.")
            return response.redirect("/authentication/login")
        }
    }catch(error){
        console.log("Erreur de connexion d'utilisateur:" + error)
        request.flash('error', "Failed to log in, try next time")
        return response.redirect("/authentication/login")
    }
}

// Middleware pour vérifier si l'utilisateur est un admin ou pas
function _isAdmin(request, response, next){
    if(request.session.user && request.session.user.role == "admin") return next()
    request.flash('error', 'User forbidden')
    response.redirect('/authentication/login')
}

// Middleware pour vérifer si l'utilisateur est connecté ou pas
function _isAuthenticated(request, response, next) {
    if (request.session.user) return next()
    request.flash('error', 'You must be connected')
    response.redirect('/authentication/login')
}

// Fonction pour vérifier le mot de passe
async function comparePassword(plainPassword, hashedPassword){
    return await bcrypt.compare(plainPassword, hashedPassword)
}

console.log(Math.PI)

module.exports = {
    goToLogin : _goToLogin,
    checkLogin : _checkLogin,
    isAdmin : _isAdmin,
    isAuthenticated : _isAuthenticated,
    logout : _logout
}