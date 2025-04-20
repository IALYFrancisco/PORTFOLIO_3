function _goToLogin(request, response){
    response.render('Authentication/Login')
}

module.exports = {
    goToLogin: _goToLogin
}