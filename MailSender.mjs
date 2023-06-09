/*---------------------------------------------------------------------------
---------------------API TO SEND EMAILS NOTIFICATIONS -----------------------
------------------------MADE BY ROBSON PARADELLA ROCHA-----------------------
---------------------------------------------------------------------------*/
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
//Calling the dotenv function to import configurations variable.
config();
// Create a transport object using SMTP
const transporter = createTransport({
  host: process.env.MAIL_SMTP_SERVER, // SMTP server address
  port: process.env.MAIL_SMTP_PORT, // SMTP port number
  secure: true, // Use SSL
  auth: {
    user: process.env.SEND_USER, // email address
    pass: process.env.SEND_PASSWORD, // email password
  },
});
// Send email Function
export default async function send_mail(to,subject,text) {
  const mail = {
    from: process.env.FROM_MAIL,
    to: to,
    subject: subject,
    text: text,
  }
let response =  await transporter.sendMail(mail);
return response['response'];

}
