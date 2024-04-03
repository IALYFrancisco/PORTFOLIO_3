const express = require('express');
const app = express();
const path = require('path');

// Définir EJS comme moteur de modèle
app.set('view engine', 'ejs');

// Définir le chemin vers le répertoire contenant les vues
app.set('views', path.join(__dirname, 'src', 'views'));

// Route pour afficher le modèle de vue admin_space.ejs
app.get('/back_office', (req, res) => {
  res.render('back_office');
});

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/my_skills', (req, res) => {
  res.render('my_skills');
})

app.get('/my_projects', (req, res) => {
  res.render('my_projects');
});

app.get('/my_contacts', (request, response) => {
  response.render('my_contacts');
});

app.get('/testPage', (request, response) => {

  const student_list = new Array('IALY', 'Francisco', 'Raymond');

  response.render('testPage', { student_list : student_list })
})


// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'src/public')));

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
