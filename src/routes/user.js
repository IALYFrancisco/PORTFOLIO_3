const { UploadProfile, Upload } = require('../services/user')

const express = require('express')

const _user_router = express.Router()

_user_router.post('/profile', , Upload.single('profile'), UploadProfile)

module.exports = {
    user_router: _user_router
}