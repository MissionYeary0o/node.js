var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'viniciusleandropereira@gmail.com',
    pass: 'jvqtcabzfpuuwbsp'
  }
});

var mailOptions = {
  from: 'viniciusleandropereira@gmail.com',
  to: 'missionyeary0o@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});