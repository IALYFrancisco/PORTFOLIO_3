function goToMySkills( request, response){
    response.render('my_skills');
}

function goToMyContacts(request, response){
    response.render('my_contacts');
}

function goToBackoffice(request, response){
    response.render('backoffice')
}

function goToBackofficeMySkills(request, response){
    let list_of_my_skills = new Array(
        {
          skill_image_logo_file_url : "assets/icon/icons8-javascript-color/icons8-javascript-100.png",
          skill_name : "javascript",
          knowledge_level : 60,
          known_library : [
            "jQuery"
          ]
        },
        {
          skill_image_logo_file_url : "assets/icon/icons8-angular-color/icons8-angular-100.png",
          skill_name : "angular",
          knowledge_level : 40,
          known_library : [
            "httpClient",
            "rxjs",
            "material",
          ]
        },
        {
          skill_image_logo_file_url : "assets/icon/icons8-vue-js-color/icons8-vue-js-100.png",
          skill_name : "vue",
          knowledge_level : 37,
          known_library : [
            "vuex",
            "pinia",
            "ionic",
            "vuetify"
          ]
        },
        {
          skill_image_logo_file_url : "assets/icon/icons8-mongodb-a-cross-platform-document-oriented-database-program-color/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
          skill_name : "mongodb",
          knowledge_level : 36,
          known_library : [
          ]
        },
        {
          skill_image_logo_file_url : "assets/icon/icons8-nodejs-color/icons8-nodejs-100.png",
          skill_name : "node",
          knowledge_level : 40,
          known_library : [
            "http",
            "mysql",
            "mongoose",
            "express",
            "ejs"
          ]
        },
    )  
    response.render('backoffice_myskills', { data : list_of_my_skills });
}

module.exports = goToMySkills
module.exports = goToMyContacts
module.exports = goToBackoffice
module.exports = goToBackofficeMySkills