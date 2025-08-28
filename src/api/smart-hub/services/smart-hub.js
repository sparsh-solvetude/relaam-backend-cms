'use strict';

/**
 * smart-hub service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smart-hub.smart-hub');
