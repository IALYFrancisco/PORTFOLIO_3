const getAllProjects = require("../services/getAllProjectsService")

async function goToBackoffice(request, response) {
    let list_of_my_projects = await getAllProjects()
    response.render('backoffice', {list_of_my_projects})
}

module.exports = goToBackoffice