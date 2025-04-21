const express = require('express')
const app_routes = express.Router()
const goToMySkills = require('../controllers/goToMySkillsController')
const goToMyContacts = require('../controllers/goToMyContactsController')
const goToHome = require('../controllers/goToHomeController')
const goToMyProjects = require('../controllers/goToMyProjectsController')
const goToBackoffice = require('../controllers/goToBackoffice')
const goToBackofficeMySkills = require('../controllers/goToBackofficeMySkills')
const goToAddProject = require('../controllers/ProjectController')
const addProject = require('../services/addProjectService')

app_routes.get('/', goToHome)

app_routes.get('/my-skills', goToMySkills)

app_routes.get('/my-contacts', goToMyContacts);

app_routes.get('/my-projects', goToMyProjects)

app_routes.post('/add-project', addProject)

module.exports = app_routes