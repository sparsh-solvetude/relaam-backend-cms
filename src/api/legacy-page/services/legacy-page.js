'use strict';

/**
 * legacy-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legacy-page.legacy-page');
