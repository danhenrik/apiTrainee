const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');

class SendMailService {
  #transporter
  constructor() {
    nodemailer.createTestAccount()
    .then((testAccount) => {
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: testAccount.port,
        secure: process.env.NODE_ENV === 'production',
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        }
      });
      this.#transporter = transporter;
    })
    .catch((error) =>  {
      throw error;
    })
  }

  async send({sender, receiver, subject, path}, variables) {
    const templateFile = fs.readFileSync(path).toString('utf-8');
    const templateParse = handlebars.compile(templateFile);
    const html = templateParse(variables);

    const info = await this.#transporter.sendMail({
      from: sender,
      to: receiver,
      subject: subject,
      html: html
    });

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return 'Email enviado com sucesso!'
  }
}

module.exports = new SendMailService;