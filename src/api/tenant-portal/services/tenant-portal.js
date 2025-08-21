'use strict';

/**
 * tenant-portal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenant-portal.tenant-portal');
