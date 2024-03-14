import nodemailer from 'nodemailer';

async function sendEmail(recipient, subject, body) {
    
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sasa.sas6a6@gmail.com', 
      pass: 'oufwqainupvzvvit' 
    }
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Your Name" <sasa.sas6a6@gmail.com>', // sender address
    to: recipient, // list of receivers
    subject: subject, // Subject line
    text: body, // plain text body
    html: `<b>${body}</b>` // html body
  });

  console.log('Message sent: %s', info.messageId);
}


  export default sendEmail;
