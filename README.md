# Mail Send API
This is a simple API using NodeJS to receive requests via HTTP POST with just the receiver, Subject and the body of email and send it using SMTP to anyone you want.

To use this API you just need:
- Create a file called ".env" in the main directory of API-Email and adjust the ".env" file with information of your Mail Server just like here:

MAIL_SMTP_SERVER= YOUR SMTP MAIL SERVER \n
MAIL_SMTP_PORT= 465 \n
SEND_USER= MAILUSER@YOURDOMAIN.COM \n
SEND_PASSWORD= YOURMAILPASSWORD \n
FROM_MAIL= YOURMAILUSER@YOURDMAIN.COM \n

- Run the MailApi.mjs and do Post Requests to test it in this address: http://yourhostname:4001/mailapi/send-email with the following JSON body:

{ \n
    "subject": "SUBJECT OF EMAIL", \n
    "toEmail": "destinatary@domain.com", \n
    "body": "EMAIL SENT BY MAIL-API" \n
}