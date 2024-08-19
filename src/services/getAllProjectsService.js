const db_connexion = require('./connectToDatabaseService')
const projectCollection = require('../models/projectsModel') 
async function getAllProjects() {
  const all_projects = await projectCollection.find()
  return all_projects
}

module.exports = getAllProjects