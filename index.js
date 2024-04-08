const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { error } = require('console');
const URIMongoDB = "mongodb+srv://ialyfrancisco7:salut@cluster0.uhjiufn.mongodb.net/mon_portfolio";

// Définir EJS comme moteur de modèle
app.set('view engine', 'ejs');

// Définir le chemin vers le répertoire contenant les vues
app.set('views', path.join(__dirname, 'src', 'views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/my_skills', (req, res) => {
  res.render('my_skills');
})

app.get('/my_projects', (req, res) => {

//Connexion à la base de données en ligne de mongoDB.
  mongoose.connect(URIMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log('Connexion à MonogDB réussie');

//Accéder à la collection project
    const collection = mongoose.connection.db.collection('project');

//Récupération des documments de la collection project
    
    const documents = await collection.find().toArray();

    res.render('my_projects', { documents });

    });
    
  })


app.get('/my_contacts', (request, response) => {
  response.render('my_contacts');
});

app.get('/testPage', (request, response) => {

  const student_list = new Array('IALY', 'Francisco', 'Raymond');
  
  response.render('testPage', { student_list : student_list });
  
});

app.get('/back_office', (req, res) => {
  res.render('back_office');
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

  res.render('BO_my_skills', { data : list_of_my_skills });
});

// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'src/public')));

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
