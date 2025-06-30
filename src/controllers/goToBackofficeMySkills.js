const Skills = require("../models/Skills")

async function goToBackofficeMySkills( request, response ) {
  let skills = await Skills.find({})
  response.render('backoffice_myskills', { skills : skills })
}

module.exports = goToBackofficeMySkills