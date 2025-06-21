const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile: { type: String, required: true, default: "assets/images/default-profile.jpg" },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: "user" },
    register_date: { type: Date, required: true, default: Date.now }
})

const _Users = new mongoose.model('Users', usersSchema)

module.exports = { Users : _Users }