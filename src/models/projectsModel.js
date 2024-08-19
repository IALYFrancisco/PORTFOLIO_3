const mongoose = require('mongoose')

const projectsSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    devloper: { type: String, required: true },
    decription: { type: String, required: true },
    skill: { type: String, required: true },
    github_url: { type: String, required: true },
    movie_file_url: { type: String, required: true },
    host_url: { type:String, required: true }
})

const projectCollection = new mongoose.model('Projects', projectsSchema)

module.exports = projectCollection;