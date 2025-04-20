function _goToLogin(request, response){
    response.render('Authentication/Login')
}

function _checkLogin(request, response){
    response.send(request.body)
}

module.exports = {
    goToLogin : _goToLogin,
    checkLogin : _checkLogin
}