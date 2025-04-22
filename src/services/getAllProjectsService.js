const projectCollection = require('../models/projectsModel')
const { connection, disconnection } = require('./db')

async function getAllProjects(filters) {
  await connection()
  const all_projects = await projectCollection.find(filters)
  await disconnection()
  return all_projects
}

module.exports = getAllProjects