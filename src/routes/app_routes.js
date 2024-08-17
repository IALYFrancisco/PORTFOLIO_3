const express = require('express')
const app_routes = express.Router()
const goToMySkills = require('../controllers/app_controllers');
const goToMyContacts = require('../controllers/app_controllers');
const goToBackoffice = require('../controllers/app_controllers');
const goToBackofficeMySkills = require('../controllers/app_controllers');
  
app_routes.get('/my_skills', goToMySkills)

app_routes.get('/my_contacts', goToMyContacts);
  
app_routes.get('/backoffice', goToBackoffice);
  
app_routes.get('/BO_my_skills', goToBackofficeMySkills);  

module.exports = app_routes

