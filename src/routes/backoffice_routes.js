const express = require('express')
const goToBackofficeMySkills = require('../controllers/goToBackofficeMySkills')
const addProjectService = require('../services/addProjectService')
const { AuthenticatedAndAdmin } = require('../services/auth_services')
const { goToBackoffice, AddSkill, GoToAddSkill, goToAddProject } = require('../services/backoffice')
const _backoffice_routes = express.Router()

_backoffice_routes.use(AuthenticatedAndAdmin)

_backoffice_routes.get('/', goToBackoffice)

_backoffice_routes.get('/add-project', goToAddProject)

_backoffice_routes.post('/add-project', addProjectService)

_backoffice_routes.get('/my-skills', goToBackofficeMySkills)

_backoffice_routes.get('/add-skill', GoToAddSkill)

_backoffice_routes.post('/add-skill', AddSkill)

module.exports = {
    backoffice_routes : _backoffice_routes 
}