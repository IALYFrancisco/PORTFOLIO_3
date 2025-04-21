const express = require('express')
const app_routes = express.Router()
const goToMySkills = require('../controllers/goToMySkillsController')
const goToMyContacts = require('../controllers/goToMyContactsController')
const goToHome = require('../controllers/goToHomeController')
const goToMyProjects = require('../controllers/goToMyProjectsController')

app_routes.get('/', goToHome)

app_routes.get('/my-skills', goToMySkills)

app_routes.get('/my-contacts', goToMyContacts);

app_routes.get('/my-projects', goToMyProjects)

module.exports = app_routes