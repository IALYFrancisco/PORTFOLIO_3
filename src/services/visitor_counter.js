const visitorModel = require('../models/visitorsModel')
const dbConnection = require('./connectToDatabaseService')

const visitorCounter = async (_ip, _browser_used, _links_visited) => {
    let date = new Date()
    dbConnection()
    let visitorCollection = visitorModel({ip: _ip, browser_used: _browser_used,  links_visited:_links_visited, date_time_of_visite:date})
    await visitorCollection.save()
}

module.exports = visitorCounter