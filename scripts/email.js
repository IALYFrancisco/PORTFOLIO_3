const { default: axios } = require("axios");

const dotenv = require('dotenv')

dotenv.config()

async function _send_email(password){
    try{

        let emaiTemplateHTML = `
            <section>
                <h1>Superuser PORTFOLIO_3 login:</h1>
                <ul>
                    <li class="superuser_email">
                        ${process.env.SUPERUSER_EMAIL}
                    </li>
                    <li class="superuser_password">
                        ${password}
                    </li>
                </ul>
            </section>
        `

        let EMAIL = {
            name: "Email from PORTFOLIO_3 platform.",
            subject: "Superuser creation.",
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
                "api-key" : process.env.EMAIL_API_KEY
            }
        })
    }catch(_error){
        console.log({
            message: "Error sending superuser login to user email.",
            error: _error
        })
    }
}

module.exports = {
    send_email : _send_email
}