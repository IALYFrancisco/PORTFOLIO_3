const { Users } = require("../models/User")
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
        const user = await Users.findOne({email: request.body.email})
        if(!user){
            request.flash('error', "User doesn't exist!")
            return response.redirect("/authentication/login")
        }
        if(user && await comparePassword(request.body.password, user.password)){
            request.session.user = {_id: user._id, name : user.name, email : user.email, role : user.role, profile: user.profile}
            if(user.role === "admin"){
                return response.redirect("/backoffice")
            }else{
                return response.redirect("/")
            }
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

function _Authenticated(request, response, next){
    if(request.session.user){
        return next()
    }
    response.status(401).json({
        message: "You must be authenticated."
    })
}

function _AuthenticatedAndAdmin(request, response, next) {
    if(request.session.user && request.session.user.role === "admin") return next()
    request.flash('error', 'You must be authenticated and admin.')
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
        let user = await Users.findOne({ email: request.body.email})
        if(user){
            request.flash('error', 'An user with this email already exist.')
            response.status(409).redirect("/authentication/register")
        }
        request.body.password = await Hashpassword(request.body.password)
        let newUser = Users(request.body)
        let result = await newUser.save()
        if(result){
            request.flash('success', "Congratulations 🎉, you are registered.")
            response.status(201).redirect('/authentication/login')
        }
    }catch(err){
        console.log(err)
        request.flash('err', 'Error registering, try later.')
    }
}

async function Hashpassword(plainText){
    return await bcrypt.hash(plainText, 10)
}

module.exports = {
    goToLogin : _goToLogin,
    checkLogin : _checkLogin,
    logout : _logout,
    zappLogin : _zappLogin,
    _Register: __Register__,
    Register: _Register,
    AuthenticatedAndAdmin: _AuthenticatedAndAdmin,
    Authenticated: _Authenticated
}