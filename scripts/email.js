const { default: axios } = require("axios");

const dotenv = require('dotenv')

dotenv.config()

async function _send_email(email){
    try{
        await axios({
            method: 'POST',
            url: process.env.EMAIL_SERVER_URL,
            data: email,
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