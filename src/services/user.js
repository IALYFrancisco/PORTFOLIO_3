const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, '../public/uploads/pofiles')
    },
    filename: (request, file, cb) => {
        const ext = path.extname(file.originalname)
        const uniqueName = Date.now() + '-' + Math.round(Math.random * 1E9) + ext
        cb(null, uniqueName)
    }
})

function UploadProfile(request, response){

}