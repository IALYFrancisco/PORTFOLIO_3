const express = require('express')
const goToBackoffice = require('../controllers/goToBackoffice')
const goToAddProject = require('../controllers/ProjectController')
const goToBackofficeMySkills = require('../controllers/goToBackofficeMySkills')
const _backoffice_routes = express.Router()

_backoffice_routes.get('/', goToBackoffice)

_backoffice_routes.get('/add-project', goToAddProject)

_backoffice_routes.get('/my-skills', goToBackofficeMySkills)

module.exports = {
    backoffice_routes : _backoffice_routes 
}