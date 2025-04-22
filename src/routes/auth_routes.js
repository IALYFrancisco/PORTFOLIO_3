const express = require('express')
const { goToLogin, checkLogin, logout, zappLogin } = require('../services/auth_services')
const _auth_routes = express.Router()

_auth_routes.get('/login', zappLogin, goToLogin)

_auth_routes.post('/login', checkLogin)

_auth_routes.get('/logout', logout)

module.exports = {
    auth_routes : _auth_routes
}