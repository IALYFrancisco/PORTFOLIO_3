const express = require('express')
const { goToLogin, checkLogin, logout, zappLogin, _Register, Register } = require('../services/auth_services')
const _auth_routes = express.Router()

_auth_routes.get('/login', zappLogin, goToLogin)

_auth_routes.post('/login', checkLogin)

_auth_routes.get('/logout', logout)

_auth_routes.get('/register', _Register)

_auth_routes.post('/register', Register)

module.exports = {
    auth_routes : _auth_routes
}