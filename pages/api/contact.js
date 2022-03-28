export default function mailHandler(req, res) {
    require('dotenv').config()
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
            host: 'smtp.ionos.de',
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
    });

    const mailData = {
        from: `"${req.body.name}" <${req.body.email} `,
        to: process.env.MAIL_USER,
        subject: `Anfrage zu ${req.body.option} von ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`
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