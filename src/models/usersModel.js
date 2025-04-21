const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" }
})

const _Users = new mongoose.model('Users', usersSchema)

module.exports = { Users : _Users }