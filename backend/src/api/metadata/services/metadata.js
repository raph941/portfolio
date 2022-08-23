'use strict';

/**
 * metadata service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::metadata.metadata');
