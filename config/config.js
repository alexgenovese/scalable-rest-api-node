const _ = require('lodash');
const env = process.env.NODE_ENV || 'development';

const envConfig = require( './' + env)

// default values
let defaultConfig = {
  env: 'production',
  hostname: 'localhost',
    port: 3000,
    settings: {
      cookie_csrf_name: 'XSRF-TOKEN'
    },
    api: {
      endpoint: '/api',
      version: '/v1'
    }
};

module.exports = _.merge(defaultConfig, envConfig);