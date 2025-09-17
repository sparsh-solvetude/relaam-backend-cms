const nodemailer = require("nodemailer");

module.exports = {
  async create(ctx) {
    try {
      const {
        name,
        email, // user’s email (will receive the mail)
        phone,
        unitNumber,
        installments,
        notes,
      } = ctx.request.body;

      // 💡 Log payload for debugging
      strapi.log.info("Received form submission:", ctx.request.body);

      // 📧 Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        // secure: false, // true if port = 465
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // 📧 Define email content
      const mailOptions = {
        from: `"Tajdid Form" <${process.env.SMTP_USERNAME}>`, // must be authenticated sender
        to: process.env.FORM_RECEIVER, // 👈 send mail to the email entered in the form
        subject: "Tajdid Form Submission",
        html: `
          <h2>New submission!</h2>
          <p>A message from ${name} has been received. Kindly respond at your earliest convenience.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Unit Number:</strong> ${unitNumber}</p>
          <p><strong>Installments:</strong> ${installments}</p>
          <p><strong>Notes:</strong> ${notes || "N/A"}</p>
        `,
      };

      // 📤 Send the email
      await transporter.sendMail(mailOptions);

      return { success: true, message: "Form submitted and email sent successfully" };
    } catch (error) {
      strapi.log.error("Form submission error:", error);
      ctx.throw(500, "Failed to submit form");
    }
  },
};
