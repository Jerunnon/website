export default function (req, res) {
    require('dotenv').config()
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
            host: 'smtp.ionos.de',
            port: 587,
            secure: true,
            tls: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
    });

    const mailData = {
        from: '"Simon Klein" <simonklein@simonklein.net>',
        to: req.body.name,
        subject: `Nachricht von ${req.body.name}`,
        text: req.body.text,
        html: `<div>${req.body.text}</div>`
    }

    transporter.sendMail(mailData, function(err, info) {
        if(err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })

    res.send('succeed')
}