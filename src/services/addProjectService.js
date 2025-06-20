const projet = require('../models/projectsModel')

async function addProjectService(request, response) {
    try{
        let newProject = projet(request.body)
        await newProject.save()
        request.flash('success', "A project is added.")
        return response.redirect('/backoffice')
    }catch(error){
        console.log('There are an errors: ' + error)
    }
}

module.exports = addProjectService