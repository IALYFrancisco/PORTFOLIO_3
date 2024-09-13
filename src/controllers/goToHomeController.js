const visitor_counter = require('../services/visitor_counter')

function goToHome(request, response) {
    let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null
    let browser = "default"
    visitor_counter(ip, browser,  request.url)
    response.render('home');
}

module.exports = goToHome