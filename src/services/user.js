const express = require('express')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, './src/public/uploads/profiles')
    },
    filename: (request, file, cb) => {
        const ext = path.extname(file.originalname)
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext
        request.uniqueName = uniqueName
        cb(null, uniqueName)
    }
})

const fileFilter = (request, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error("File type not allowed."), false)
    }
}

const _Upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 15 * 1024 * 1024 }
})

function _UploadProfile(request, response){
    try{
        // let userID = request.user._id
        let filePath = `${process.env.APP_ADDRESS}/uploads/profiles/${request.uniqueName}`
        response.status(200).json({
            message: "Picture uploaded.",
            picture: filePath
        })
    }catch(err){
        response.status(500).json({
            error: err.message
        })
    }
}

module.exports = {
    UploadProfile: _UploadProfile,
    Upload: _Upload
}