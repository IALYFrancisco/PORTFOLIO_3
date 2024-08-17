const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app_routes = require('./src/routes/app_routes')
const app = express();

dotenv.config();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
  res.render('home');
})

app.use('/', app_routes)

app.get('/my_projects', (req, res) => {

mongoose.connect(process.env.DB_URI)
  .then(async () => {
    console.log('Connexion à MonogDB réussie');
    const collection = mongoose.connection.db.collection('project');
    const documents = await collection.find().toArray();
    res.render('my_projects', { documents });
  }); 
})

app.get('/my_contacts', (request, response) => {
  response.render('my_contacts');
});

app.get('/backoffice', (req, res) => {
  res.render('backoffice');
});

app.get('/BO_my_skills', (req, res) => {

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

app.listen(process.env.APP_PORT, () => {
  console.log(`http://127.0.0.1:${process.env.APP_PORT}`);
});