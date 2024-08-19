const express = require('express')
const app_routes = express.Router()
const goToMySkills = require('../controllers/goToMySkillsController')
const goToMyContacts = require('../controllers/goToMyContactsController')
const goToHome = require('../controllers/goToHomeController')
const goToMyProjects = require('../controllers/goToMyProjectsController')
const goToBackoffice = require('../controllers/goToBackoffice')
const goToBackofficeMySkills = require('../controllers/goToBackofficeMySkills')

app_routes.get('/', goToHome)

app_routes.get('/my_skills', goToMySkills)

app_routes.get('/my_contacts', goToMyContacts);
  
app_routes.get('/backoffice', goToBackoffice);

app_routes.get('/my_projects', goToMyProjects)
  
app_routes.get('/BO_my_skills', goToBackofficeMySkills);

module.exports = app_routes