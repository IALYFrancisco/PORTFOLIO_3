const projectCollection = require('../models/projectsModel')
const dbConnection = require('./connectToDatabaseService')

async function getAllProjects() {
  dbConnection()
  const all_projects = await projectCollection.find()
  return all_projects
}

module.exports = getAllProjects