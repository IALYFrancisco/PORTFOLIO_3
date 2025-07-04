const express = require('express')
const app_routes = express.Router()
const goToMySkills = require('../controllers/goToMySkillsController')
const goToMyProjects = require('../controllers/goToMyProjectsController')
const { goToHome, goToMyContacts } = require('../services/app')

app_routes.get('/', goToHome)

app_routes.get('/my-skills', goToMySkills)

app_routes.get('/my-contacts', goToMyContacts);

app_routes.get('/my-projects', goToMyProjects)

module.exports = app_routes