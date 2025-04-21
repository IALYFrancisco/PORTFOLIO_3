const { Users } = require("../models/usersModel")
const { connection, disconnection } = require("../services/db")

function _goToLogin(request, response){
    response.render('Authentication/Login')
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
        response.send(request.body)
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

module.exports = {
    goToLogin : _goToLogin,
    checkLogin : _checkLogin,
    isAdmin : _isAdmin,
    isAuthenticated : _isAuthenticated
}