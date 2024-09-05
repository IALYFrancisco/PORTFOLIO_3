const mongoose = require('mongoose')

const visitorShema = mongoose.Schema({
    ip: {type:String, required:true},
    browser_used:{type:String, required:true},
    links_visited:{type:String, required:true},
    date_time_of_visite:{type:String, required:true}  
})

const visitorModel = new mongoose.model('Visitors', visitorShema)

module.exports = visitorModel