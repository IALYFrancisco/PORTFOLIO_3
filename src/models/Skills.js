const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    knowledge_percentage: { type: Number, default: 0 },
    add_date: { type: Date, default: Date.now }
})

const Skills = new mongoose.model('Skills', skillsSchema)

module.exports = { Skills : Skills }