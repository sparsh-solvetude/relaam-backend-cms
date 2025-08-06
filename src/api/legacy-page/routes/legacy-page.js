'use strict';

/**
 * legacy-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::legacy-page.legacy-page');
