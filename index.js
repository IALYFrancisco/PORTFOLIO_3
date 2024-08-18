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

app.use('/', app_routes)

app.get('/my_projects', (req, res) => {

mongoose.connect(process.env.DB_URI)
  .then(async () => {
    console.log('Connexion à MonogDB réussie');
    const collection = mongoose.connection.db.collection('projects');
    const documents = await collection.find().toArray();
    res.render('my_projects', { documents });
  }); 
})

app.listen(process.env.APP_PORT, () => {
  console.log(`http://127.0.0.1:${process.env.APP_PORT}`);
});