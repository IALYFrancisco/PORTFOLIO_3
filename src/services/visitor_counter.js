const visitorModel = require('../models/visitorsModel')
const { connection, disconnetion, disconnection } = require('./db')
const visitorCounter = async (_ip, _browser_used, _links_visited) => {
    let date = new Date()
    await connection()
    let visitorCollection = visitorModel({ip: _ip, browser_used: _browser_used,  links_visited:_links_visited, date_time_of_visite:date})
    await visitorCollection.save()
    await disconnection()
}

module.exports = visitorCounter