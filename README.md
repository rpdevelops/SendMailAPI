# Mail Send API
This is a simple API using NodeJS to receive requests via HTTP POST with just the receiver, Subject and the body of email and send it using SMTP to anyone you want.

To use this API you just need:
- Create a file called ".env" in the main directory of API-Email and adjust the ".env" file with information of your Mail Server just like here:

MAIL_SMTP_SERVER= YOUR SMTP MAIL SERVER <br>
MAIL_SMTP_PORT= 465 <br>
SEND_USER= MAILUSER@YOURDOMAIN.COM <br>
SEND_PASSWORD= YOURMAILPASSWORD <br>
FROM_MAIL= YOURMAILUSER@YOURDMAIN.COM <br>

- Run the MailApi.mjs and do Post Requests to test it in this address: http://yourhostname:4001/mailapi/send-email with the following JSON body:

{ <br>
    "subject": "SUBJECT OF EMAIL", <br>
    "toEmail": "destinatary@domain.com", <br>
    "body": "EMAIL SENT BY MAIL-API" <br>
}