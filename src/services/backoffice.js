const getAllProjects = require("../services/getAllProjectsService")

async function _goToBackoffice(request, response) {
    if(request.query.project_name){
        let list_of_my_projects = await getAllProjects({name: request.query.project_name})
        let context = {
            projectsList: list_of_my_projects
        }
        response.render('backoffice', context)
    }else{
        let list_of_my_projects = await getAllProjects({})
        let context = {
            projectsList: list_of_my_projects,
        }
        response.render('backoffice', context)
    }
}

module.exports = { 
    goToBackoffice: _goToBackoffice
}