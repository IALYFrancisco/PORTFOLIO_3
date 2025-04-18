const projectCollection = require('../models/projectsModel')
const dbConnection = require('./connectToDatabaseService')

async function getAllProjects(filters) {
  dbConnection()
  const all_projects = await projectCollection.find(filters)
  return all_projects
}

module.exports = getAllProjects