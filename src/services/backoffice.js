const projectCollection = require("../models/projectsModel")
const Skills = require("../models/Skills")

async function _goToBackoffice(request, response) {
    if(request.query.project_name){
        let list_of_my_projects = await projectCollection.find({ name: request.query.project_name })
        let context = {
            projectsList: list_of_my_projects
        }
        response.render('backoffice', context)
    }else{
        let list_of_my_projects = await projectCollection.find({})
        let context = {
            projectsList: list_of_my_projects,
        }
        response.render('backoffice', context)
    }
}

function GoToAddSkill(request, response){
    response.render("Backoffice/AddSkills")
}

async function AddSkill(request, response){
    try{
        let newSkill = Skills(request.body)
        let result = await newSkill.save()
        if(result){
            response.redirect("/backoffice/my-skills")
        }
    }catch(err){
        response.redirect("/backoffice/add-skill")
        console.log(err)
    }
}

function goToAddProject( request, response ) {
    response.render('Backoffice/addProject');
};


async function goToBackofficeMySkills( request, response ) {
  let skills = await Skills.find({})
  response.render('backoffice_myskills', { skills : skills })
}

async function addProjectService(request, response) {
    try{
        let newProject = projectCollection(request.body)
        await newProject.save()
        request.flash('success', "A project is added.")
        return response.redirect('/backoffice')
    }catch(error){
        console.log('There are an errors: ' + error)
    }
}

module.exports = { 
    goToBackoffice: _goToBackoffice,
    AddSkill : AddSkill,
    GoToAddSkill : GoToAddSkill,
    goToAddProject : goToAddProject,
    goToBackofficeMySkills : goToBackofficeMySkills,
    addProjectService : addProjectService
}