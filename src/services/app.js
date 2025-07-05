const visitor_counter = require('../services/visitor_counter')
const projectCollection = require("../models/projectsModel")

function goToHome(request, response) {
    let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null
    let browser = "default"
    visitor_counter(ip, browser,  request.url)
    response.render('home');
}

function goToMySkills(request, response){
    response.render('my_skills');
}

async function goToMyProjects(request, response) {
    const documents = await projectCollection.find()
    response.render('my_projects', {documents})
}

function goToMyContacts(request, response){
    response.render('my_contacts')
}

module.exports = { 
    goToMyContacts : goToMyContacts,
    goToHome : goToHome,
    goToMySkills: goToMySkills,
    goToMyProjects : goToMyProjects
}