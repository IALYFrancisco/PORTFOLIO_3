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

function GoToAddSkill(request, resposne){
    resposne.render("Backoffice/AddSkills")
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
        console.log("Error adding skill.")
    }
}

module.exports = { 
    goToBackoffice: _goToBackoffice,
    AddSkill : AddSkill,
    GoToAddSkill : GoToAddSkill
}