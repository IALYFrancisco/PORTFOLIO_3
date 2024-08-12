const express = require('express')
const app_routes = express.Router()
  
app_routes.get('/my_skills', (req, res) => {
    res.render('my_skills');
})

exports.modules = app_routes

