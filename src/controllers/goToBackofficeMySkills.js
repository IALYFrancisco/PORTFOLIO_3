function goToBackofficeMySkills( request, response ) {
    response.render('backoffice_myskills', { data : list_of_my_skills })
}

module.exports = goToBackofficeMySkills