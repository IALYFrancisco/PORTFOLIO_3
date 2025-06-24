const express = require('express')
const multer = require('multer')
const path = require('path')
const { Users } = require('../models/User')

const storage = multer.memoryStorage()

const fileFilter = (request, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error("File type not supported."), false)
    }
}

const _Upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 15 * 1024 * 1024 }
})

async function _UploadProfile(request, response){
    try{
        let filePath = `${process.env.APP_ADDRESS}/uploads/profiles/${request.uniqueName}`
        let results = await Users.findByIdAndUpdate(request.session.user._id, { profile: `uploads/profiles/${request.uniqueName}` })
        request.session.user.profile = `uploads/profiles/${request.uniqueName}`
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