const mongoose = require('mongoose')

const projectsSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    devlopers: { type: String, required: true },
    descriptions: { type: String, required: true },
    skills: { type: String, required: true },
    github_url: { type: String, required: true },
    moviefile_url: { type: String, required: true },
    host_url: { type:String, required: true }
})

const projectCollection = new mongoose.model('Projects', projectsSchema)

module.exports = projectCollection;