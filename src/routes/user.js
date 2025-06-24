import { UploadProfile } from '../services/user'

const express = require('express')

export const user_router = express.Router()

user_router.post('/profile', UploadProfile)