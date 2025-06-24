const express = require('express')
const multer = require('multer')
const path = require('path')
const { Users } = require('../models/User')
const sharp = require('sharp')

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
        if(!request.file) return response.status(400).json("No picture provided.")
        let fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}.jpeg`
        let output = `./src/public/uploads/profiles/${fileName}`
        await sharp(request.file.buffer).jpeg({ quality: 60 }).toFile(output)
        await Users.findByIdAndUpdate(request.session.user._id, { profile: `uploads/profiles/${fileName}` })
        request.session.user.profile = `uploads/profiles/${fileName}`
        response.status(201).json({
            message: "Profile image changed successfully.",
            image: `${process.env.APP_ADDRESS}/uploads/profiles/${fileName}`
        })
    }catch(err){
        console.log(err)
        response.status(500).json({
            error: err.message
        })
    }
}

module.exports = {
    UploadProfile: _UploadProfile,
    Upload: _Upload
}