'use strict';

/**
 *  contact-form controller
 */

module.exports = {
  async create(ctx) {
    try {
      const formData = ctx.request.body;

      // Call service to send email
      await strapi
        .service('api::contact-form.contact-form')
        .sendEmail(formData);

      // Optionally: save submission in DB if you have content-type
      // await strapi.db.query('api::contact-form.contact-form').create({ data: formData });

      ctx.send({ message: 'Form submitted successfully' });
    } catch (err) {
      console.error('Contact form error:', err);
      ctx.throw(500, 'Form submission failed');
    }
  },
};
