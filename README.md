# Mail Send API
This is a simple API using NodeJS to receive requests via HTTP POST with just the receiver, Subject and the body of email and send it using SMTP to anyone you want.

To use this API you just need:
- Create a file called ".env" in the main directory of API-Email and adjust the ".env" file with information of your Mail Server just like here:

MAIL_SMTP_SERVER= YOUR SMTP MAIL SERVER
MAIL_SMTP_PORT= 465
SEND_USER= MAILUSER@YOURDOMAIN.COM
SEND_PASSWORD= YOURMAILPASSWORD
FROM_MAIL= YOURMAILUSER@YOURDMAIN.COM

- Run the MailApi.mjs and do Post Requests to test it in this address: http://yourhostname:4001/mailapi/send-email with the following JSON body:

{
    "subject": "SUBJECT OF EMAIL",
    "toEmail": "destinatary@domain.com",
    "body": "EMAIL SENT BY MAIL-API"
}