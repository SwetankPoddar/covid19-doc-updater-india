const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);




module.exports = (req, res) => {
    const msg = {
        to: 'hello@swetankpoddar.me',
        from: 'poddarswetank@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sgMail.send(msg).then(r => console.log(r));

  };