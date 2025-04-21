const projet = require('../models/projectsModel')
const { connection, disconnection } = require('../services/db')

async function addProjectService(request, response) {
    try{
        await connection()
        let newProject = projet(request.body)
        await newProject.save()
        await disconnection()
        response.redirect('/backoffice')
    }catch(error){
        console.log('There are an errors: ' + error)
    }
}

module.exports = addProjectService