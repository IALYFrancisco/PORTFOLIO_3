const express = require('express')
const app_routes = express.Router()
const goToMySkills = require('../controllers/goToMySkillsController');
const goToMyContacts = require('../controllers/goToMyContactsController');
const goToHome = require('../controllers/goToHomeController');

app_routes.get('/', goToHome)

app_routes.get('/my_skills', goToMySkills)

app_routes.get('/my_contacts', goToMyContacts);
  
app_routes.get('/backoffice', (req, res) => {
    res.render('backoffice');
});
  
app_routes.get('/BO_my_skills', (req, res) => {
  
    let list_of_my_skills = new Array(
      {
        skill_image_logo_file_url : "assets/icon/icons8-javascript-color/icons8-javascript-100.png",
        skill_name : "javascript",
        knowledge_level : 60,
        known_library : [
          "jQuery"
        ]
      },
      {
        skill_image_logo_file_url : "assets/icon/icons8-angular-color/icons8-angular-100.png",
        skill_name : "angular",
        knowledge_level : 40,
        known_library : [
          "httpClient",
          "rxjs",
          "material",
        ]
      },
      {
        skill_image_logo_file_url : "assets/icon/icons8-vue-js-color/icons8-vue-js-100.png",
        skill_name : "vue",
        knowledge_level : 37,
        known_library : [
          "vuex",
          "pinia",
          "ionic",
          "vuetify"
        ]
      },
      {
        skill_image_logo_file_url : "assets/icon/icons8-mongodb-a-cross-platform-document-oriented-database-program-color/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
        skill_name : "mongodb",
        knowledge_level : 36,
        known_library : [
        ]
      },
      {
        skill_image_logo_file_url : "assets/icon/icons8-nodejs-color/icons8-nodejs-100.png",
        skill_name : "node",
        knowledge_level : 40,
        known_library : [
          "http",
          "mysql",
          "mongoose",
          "express",
          "ejs"
        ]
      },
    )
  
    res.render('backoffice_myskills', { data : list_of_my_skills });
  });
module.exports = app_routes

