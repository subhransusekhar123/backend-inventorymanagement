require("dotenv").config();
const nodemailer = require("nodemailer");


const sendEmail=(email,message)=>{

    var message = {
        from: "suvarna.pawar812@gmail.com",
        to: email,
        subject: "SUCCESS REGISTRATION",
        text: message,
        html: `<p>${message}</p>`
      };
   const transporter= nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",  // host of your smtp provider
        port: 587,
        secure: false, // upgrade later with STARTTLS
      
        auth: {
          user: "suvarna.pawar812@gmail.com",
          pass: "qsSvKnOR1260BZJ9",
        },
      });

      transporter.sendMail(message,function(err,data){
        console.log(err);

        console.log(data);

      })

}

module.exports={ sendEmail };