module.exports = ({ env }) => ({
  upload: {
    config: {
      actionOptions: {
        upload: {
          sizeLimit: 20 * 1024 * 1024,
          allowedTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
            "image/svg+xml",
          ],
        },
      },
    },
  },

  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env.int("SMTP_PORT", 587),
        secure: false, // ⚡ Must be false for Gmail STARTTLS
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_USERNAME"),
        defaultReplyTo: env("SMTP_USERNAME"),
      },
    },
  },
});
