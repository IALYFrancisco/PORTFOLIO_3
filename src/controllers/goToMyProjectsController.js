const getAllProjects = require('../services/getAllProjectsService')

async function goToMyProjects(request, response) {
    const documents = await getAllProjects()
    response.render('my_projects', {documents})
}

module.exports = goToMyProjects