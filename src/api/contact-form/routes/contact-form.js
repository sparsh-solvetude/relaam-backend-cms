'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-forms',
      handler: 'contact-form.create',
      config: {
        auth: false, // public endpoint
      },
    },
  ],
};
