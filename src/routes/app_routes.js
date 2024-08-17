const express = require('express')
const app_routes = express.Router()
  
app_routes.get('/my_skills', (req, res) => {
    res.render('my_skills');
})
//Mauvaise exportation c'est module export, non pas exports.modules
// exports.modules = app_routes
module.exports = app_routes

