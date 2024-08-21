function goToHome(request, response) {
    console.log("GET /")
    response.render('home');
}

module.exports = goToHome