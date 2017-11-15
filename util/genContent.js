let moment = require('moment')

module.exports.genContent = (username, expiredDate, activatedLink) => {
    let expiredTime = moment(expiredDate).format('YYYY-MM-DD')
    return `<html>
                <head>
                    <meta charset="utf-8" />
                </head>
                <body>
                    <p><b>Dear ${username}</b>! You have registered an account at CoolBitX.<br/>
                    Please click on the link below to verify your email address<br/>
                    <a href='${activatedLink}'>Hit me to Verify Account</a>
                    This link will expire after ${expiredTime}<br>
                    If you did not register CoolBitX account, please ignore this email.<br>
                    <br>
                    coolbitx.com<br/>
                    </p>
                </body>
            </html>`
}