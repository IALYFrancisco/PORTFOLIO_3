const { Authenticated } = require('../services/auth_services')
const { UploadProfile, Upload } = require('../services/user')

const express = require('express')

const _user_router = express.Router()

_user_router.post('/profile', Authenticated, Upload.single('profile'), UploadProfile)

module.exports = {
    user_router: _user_router
}