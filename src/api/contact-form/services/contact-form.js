'use strict';

const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(formData) {
    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Gmail SMTP with port 587 is not secure
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${formData.firstName} ${formData.lastName}" <${formData.email}>`,
      to: process.env.CONTACT_FORM_RECEIVER,
      replyTo: formData.email,
      subject: `New Contact Form Submission`,
      html: `
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile:</strong> ${formData.mobile}</p>
        <p><strong>Contact Mode:</strong> ${formData.contactMode}</p>
        <p><strong>Subscribe:</strong> ${formData.subscribe ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong> ${formData.description}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  },
};
