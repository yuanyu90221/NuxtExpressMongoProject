// modules/sendMail.js
module.exports.MailSender = {
  sendMail: function (_recipient, _subject, _html, _callback) {
    let nodemailer = require('nodemailer')
    let smtpTransport = require('nodemailer-smtp-transport')
    let transporter = nodemailer.createTransport(smtpTransport({
      host: 'smtp.gmail.com',
      port: 25,
      secure: false, // use SSL
      service: 'Gmail',
      auth: {
        user: 'yuanyu90221@gmail.com',
        pass: '123770522'
        // user: 'yuanyu_90221@hotmail.com',
        // pass: 'dob770522'
      }
      // ,
      // tls: {
      //   rejectUnauthorized: false
      // }
    }))
    // nodemailer.SMTP = {
    //   host: 'stmp.gmail.com', // server位置
    //   port: 25, // 可不給,預設25,
    //   ssl: false // 可不給,預設false
    //   // user: 'yuanyu90221@gmail.com', // 可不給
    //   // pass: '123770522', // 可不給
    //   // use_authentication: true// 可不給
    // }
    // let transporter = nodemailer.createTransport()
    transporter.sendMail({
      from: 'server@coolbitx.com',
      to: _recipient,
      subject: _subject,
      // text: "Hello world ✔",
      html: _html
    }, function (err, info) {
      _callback(err, info)
    })
  }
}
