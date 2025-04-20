const express = require('express')
const { goToLogin } = require('../services/auth_services')
const _auth_routes = express.Router()

_auth_routes.get('/login', goToLogin)

module.exports = {
    auth_routes : _auth_routes
}