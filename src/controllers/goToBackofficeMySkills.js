function goToBackofficeMySkills( request, response ) {

    let list_of_my_skills = new Array(
        {
          skill_image_logo_file_url : "assets/images/logo-de-javascript.png",
          skill_name : "javascript",
          knowledge_level : 60,
          known_library : [
            "jQuery"
          ]
        },
        {
          skill_image_logo_file_url : "assets/images/logo-de-angular.png",
          skill_name : "angular",
          knowledge_level : 40,
          known_library : [
            "httpClient",
            "rxjs",
            "material",
          ]
        },
        {
          skill_image_logo_file_url : "assets/images/logo-de-vue.js.png",
          skill_name : "vue.js",
          knowledge_level : 37,
          known_library : [
            "vuex",
            "pinia",
            "ionic",
            "vuetify"
          ]
        },
        {
          skill_image_logo_file_url : "assets/images/mongodb.png",
          skill_name : "mongodb",
          knowledge_level : 36,
          known_library : [
          ]
        },
        {
          skill_image_logo_file_url : "assets/images/logo-de-node.js.png",
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

    response.render('backoffice_myskills', { data : list_of_my_skills })
}

module.exports = goToBackofficeMySkills