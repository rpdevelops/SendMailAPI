/*---------------------------------------------------------------------------
---------------------API TO SEND EMAILS NOTIFICATIONS -----------------------
------------------------MADE BY ROBSON PARADELLA ROCHA-----------------------
---------------------------------------------------------------------------*/
import send_mail from "./MailSender.mjs";
import express  from 'express';
import bodyParser from "body-parser";
//DEFINING A STRING OF SERVER
const api = express();
//USING A BODY PARSER TO GET THE VARIABLES SENT IN THE REQUEST
api.use(bodyParser.json());

//DEFINING A API ROUTE TO RECEIVE THE REQUESTS
api.post('/mailapi/send-email', (req, res) => {
  const subject = req.body.subject;
  const toEmail = req.body.toEmail;
  const body = req.body.body;
//SEND EMAIL WITH THE VARIABLES SENT IN REQUEST.
try {
    send_mail(toEmail,subject ,body);
    res.send('Email sent successfully');
} catch (error) {
    res.send(error);
}
});

// SERVER START
api.listen(4001, () => {
  console.log('Server Started, Route to API is :4001/mailapi/send-email');
});