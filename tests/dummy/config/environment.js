/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    //baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' maxcdn.bootstrapcdn.com",
      'font-src': "'self' fonts.gstatic.com maxcdn.bootstrapcdn.com",
      'connect-src': "'self'",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maxcdn.bootstrapcdn.com",
      'media-src': "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-highlight-code': {
      style: 'tomorrow'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/ember-string-helpers/';
    ENV.baseURL = '/ember-string-helpers';
  }

  return ENV;
};
