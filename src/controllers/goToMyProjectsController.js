const projectCollection = require("../models/projectsModel")

async function goToMyProjects(request, response) {
    const documents = await projectCollection.find()
    response.render('my_projects', {documents})
}

module.exports = goToMyProjects