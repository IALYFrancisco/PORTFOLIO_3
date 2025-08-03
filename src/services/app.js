const visitor_counter = require('../services/visitor_counter')
const projectCollection = require("../models/projectsModel")
const axios = require('axios')

function goToHome(request, response) {
    let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null
    let browser = "default"
    visitor_counter(ip, browser,  request.url)
    response.render('home');
}

function goToMySkills(request, response){
    response.render('my_skills');
}

async function get_all_projects(){
    try{
        let projects = await axios({
            method: 'GET',
            url: `${process.env.DOMAIN_PROJECT_ENDPOINT}/project/get-all`,
            headers: {
                'x-api-key': process.env.PROJECT_API_KEY
            }
        })
        return projects
    }catch(err){
        console.log('Error fetching project list from ME')
        console.log(err)
    }

}

async function goToMyProjects(request, response) {
    let _response = await get_all_projects()
    if(_response){
        let projects = _response.data
        response.render('my_projects', {projects})
    }
}

function goToMyContacts(request, response){
    response.render('my_contacts')
}

async function send_email(data){
    try{

        let emaiTemplateHTML = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <main style="width: 100%; height: max-content;">
                        <section style="width: 100%; max-width: 500px; margin: 100px auto;">
                            <header style="height: 50px; width: 100%; background-color: #581845; border-top-right-radius: 10px; border-top-left-radius: 10px;"></header>
                            <section style="padding: 50px 25px 10px 25px">
                                <h2 style="font-family: 'Trebuchet MS', Arial, sans-serif; color: #581845;">User message :</h2>
                            </section>
                            <section style="padding: 0 25px; margin-top: 15px; margin-bottom: 10px;">
                                <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size: 14px;">Hello IALY, ${data.name} <span style="color: #581845">( ${data.email} )</span> left message for you from your portfolio.</p>
                            </section>
                            <section style="padding: 0 25px;">
                                <h4 style="font-family: 'Trebuchet MS', Arial, sans-serif; margin-bottom: 10px; color: #581845;">The message :</h4>
                                <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size: 14px; margin-bottom: 50px;">${data.descriptions}</p>
                            </section>
                            <footer  style="height: 50px; width: 100%; background-color: #581845; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;"></footer>
                        </section>
                    </main>
                </body>
            </html>
        `

        let EMAIL = {
            name: "Email from PORTFOLIO_3 platform.",
            subject: `PORTFOLIO | User message`,
            sender : {
                name: "PORTFOLIO_3",
                email: "franciscoialy43@gmail.com"
            },
            to: [{
                name: `${process.env.SUPERUSER_NAME}`,
                email: `${process.env.SUPERUSER_EMAIL}`
            }],
            htmlContent: emaiTemplateHTML
        }

        await axios({
            method: 'POST',
            url: process.env.EMAIL_SERVER_URL,
            data: EMAIL,
            headers: {
                "Content-Type" : "application/json",
                "api-key" : process.env.EMAIL_API_KEY,
                'User-Agent': 'python-requests/2.31.0',
                'Accept-Encoding': 'gzip, deflate',
                'Accept': '*/*',
                'Connection': 'keep-alive'
            }
        })

        console.log("User message sent to superuser email.")
        return true
        
    }catch(_error){
        console.log({
            message: "Error sending user message to user email.",
            error: _error
        })
        return false
    }
}

async function SendContactEmail(request, response){
    try{  
       let data = request.body
       let result = await send_email(data)
       if(await result===true){
           request.flash('success', '👏 Your message is sent, you will be contacted by IALY as possible, see you.')
           response.status(200).redirect('/my-contacts')
       }else{
           request.flash('error', '😥 Error sending message, try later.')
           response.status(200).redirect('/my-contacts')
       }
    }catch(err){
        request.flash('error', '😥 Error sending message, try later.')
        response.status(200).redirect('/my-contacts')
    }
}

module.exports = { 
    goToMyContacts : goToMyContacts,
    goToHome : goToHome,
    goToMySkills: goToMySkills,
    goToMyProjects : goToMyProjects,
    SendContactEmail : SendContactEmail
}
