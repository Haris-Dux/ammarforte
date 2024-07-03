
import nodemailer from "nodemailer";

interface EmailData {
    email:string
    number:string
    name:string
    message:string
};

export async function sendEmail(data:EmailData) {
  const { email, name, number , message} = data;

    let output = `
    <p>Email : ${email}</p>
    <p>NUmber : ${number}</p>
    <p>Name : ${name}</p>
    <p>Message : ${message}</p>
  `;
  
  let transport = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_AUTH_USER_EMAIL,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailoptions = {
    from: process.env.EMAIL_AUTH_USER_EMAIL,
    to: "never.reply87@gmail.com" ,
    subject: "New Query On Ammar Forte",
    html: output,
  };

  transport.sendMail(mailoptions, (error, info) => {
    if (error) {
      return false;
    }
    return true;
  });
}
