const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kasandra99@ethereal.email",
      pass: "S7Ap6QHGHACqtGHgeD",
    },
  });

  let info = await transporter.sendMail({
    from: "Deepak Jangir <tdeepak509@gmail.com>",
    to: "tdeepak509@gmail.com",
    subject: "Hello",
    html: "<h2>Sending emails with node JS</h2>",
  });

  res.send(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "deepakjangir15@yahoo.com", // Change to your recipient
    from: "tdeepak509@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  const info = await sgMail.send(msg);
  return res.json(info);
};

module.exports = sendEmail;
