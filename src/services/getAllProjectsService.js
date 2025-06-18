const projectCollection = require('../models/projectsModel')

async function getAllProjects(filters) {
  const all_projects = await projectCollection.find(filters)
  return all_projects
}

module.exports = getAllProjects