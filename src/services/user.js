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

const fileFilter = (request, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
    if(allowedTypes.includes(file.mimeType)){
        cb(null, true)
    }else{
        cb(new Error("File type not allowed."), false)
    }
}

function UploadProfile(request, response){

}