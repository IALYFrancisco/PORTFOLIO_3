const express = require('express')
const { goToLogin, checkLogin } = require('../services/auth_services')
const _auth_routes = express.Router()

_auth_routes.get('/login', goToLogin)

_auth_routes.post('/login', checkLogin)

module.exports = {
    auth_routes : _auth_routes
}