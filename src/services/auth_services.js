const { Users } = require("../models/usersModel")
const bcrypt = require('bcrypt')

function _goToLogin(request, response){
    response.render('Authentication/Login')
}

function _logout(request, response) {
    request.session.destroy((err)=>{
        if(err){
            console.log("Disconnection error.", err)
            request.flash('error', 'Disconnection error.')
            return response.redirect("/backoffice")
        }
        response.clearCookie("connect.sid")
        response.redirect("/authentication/login")
    })
}

async function _checkLogin(request, response){
    try {
        const { email, password } = request.body
        const user = await Users.findOne({email})
        if(!user){
            request.flash('error', "User doesn't exist!")
            return response.redirect("/authentication/login")
        }
        if(user && await comparePassword(password, user.password)){
            request.session.user = {name : user.name, email : user.email, role : user.role, profile: user.profile}
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

// Middleware pour zapper login
async function _zappLogin (request, response, next){
    if (request.session.user) return response.redirect('/backoffice')
    return next()
}

async function __Register__ (request, response) {
    response.render("Authentication/Register")
}

async function _Register(request, response) {
    try{
        console.log(request.body)
    }catch(err){
        console.log(err)
        request.flash('err', 'Error registering, try later.')
    }
}

module.exports = {
    goToLogin : _goToLogin,
    checkLogin : _checkLogin,
    isAdmin : _isAdmin,
    isAuthenticated : _isAuthenticated,
    logout : _logout,
    zappLogin : _zappLogin,
    _Register: __Register__
}
