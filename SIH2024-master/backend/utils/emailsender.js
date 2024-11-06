const nodemailer = require('nodemailer');
const clgDev = require('./clgDev');

const emailsender= async(toEmail, subject, body)=>
{
    try {
        const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        });

        const info = await transporter.sendMail({
            from: `${process.env.FROM_NAME} | Nishant Manocha <${process.env.FROM_EMAIL}>`,
            to: toEmail,
            subject: subject,
            html: body,
        });

        return info;
    }catch (err) {
      clgDev(err.message);
      throw err;
    }
}
module.exports = emailsender;
