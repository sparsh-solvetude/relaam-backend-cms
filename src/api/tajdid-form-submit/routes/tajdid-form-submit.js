module.exports = {
  routes: [
    {
      method: "POST",
      path: "/tajdid-form-submit",
      handler: "tajdid-form-submit.create",
      config: {
        auth: false, // allow public form submissions
      },
    },
  ],
};
