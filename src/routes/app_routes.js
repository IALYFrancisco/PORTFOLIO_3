const express = require('express')
const app_routes = express.Router()
const { goToHome, goToMyContacts, goToMySkills, goToMyProjects } = require('../services/app')

app_routes.get('/', goToHome)

app_routes.get('/my-skills', goToMySkills)

app_routes.get('/my-contacts', goToMyContacts);

app_routes.get('/my-projects', goToMyProjects)

app_routes.post('/send-email', )

module.exports = app_routes