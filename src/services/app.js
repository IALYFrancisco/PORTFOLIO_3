const visitor_counter = require('../services/visitor_counter')
const projectCollection = require("../models/projectsModel")
const { send_email } = require('../../scripts/services/services')

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

async function SendContactEmail(request, response){
    try{  
       let message = request.body
       console.log(message)
    //    let result = await send_email("An user sent you message from your portfolio", message)
       request.flash('success', '👏 Your message is sent, you will be contacted by IALY as possible, see you.')
       response.status(200).redirect('/my-contacts')
    }catch(err){
        request.flash('error', '😥 Error sending message, try later.')
        response.status(200).redirect('/my-contacts')
    }
}

module.exports = { 
    goToMyContacts : goToMyContacts,
    goToHome : goToHome,
    goToMySkills: goToMySkills,
    goToMyProjects : goToMyProjects,
    SendContactEmail : SendContactEmail
}