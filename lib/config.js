/* 
 * Create and export configuration variables
 *
 */

 // Container for allthe environments
 var environments = {};

// staging (default) environment 
environments.staging = {
   'httpPort' : 3000,
   'httpsPort' : 3001,
   'envName' : 'staging',
   'hashingSecret' : 'thisIsASecret',
   'maxChecks' : 5,
   'twilio' : { 
      'accountSid' : 'AC2fced2ad58603acca7bfe0abbb361139',
      'authToken' : '91d6e96128cdc7e5cf135b10efe09d51',
      'fromPhone' : '+5531933007100'
   },
      'templateGlobals' : {
      'appName' : 'UptimeChecker',
      'companyName' : 'NotARealCompany, Inc',
      'yearCreated' : '2019',
      'baseUrl' : 'http://localhost:3000/'
   }
};

// Testing environment 
environments.testing = {
   'httpPort' : 4000,
   'httpsPort' : 4001,
   'envName' : 'testing',
   'hashingSecret' : 'thisIsASecret',
   'maxChecks' : 5,
   'twilio' : { 
      'accountSid' : 'AC2fced2ad58603acca7bfe0abbb361139',
      'authToken' : '91d6e96128cdc7e5cf135b10efe09d51',
      'fromPhone' : '+5531933007100'
   },
      'templateGlobals' : {
      'appName' : 'UptimeChecker',
      'companyName' : 'NotARealCompany, Inc',
      'yearCreated' : '2019',
      'baseUrl' : 'http://localhost:3000/'
   }
};

 // production environments
 environments.production = {
    'httpPort' : 5000,
    'httpsPort' : 5001,
    'envName' : 'production',
    'hashingSecret' : 'thisIsAlsoASecret',
    'maxChecks' : 5,
    'twilio' : {
       'accountSid' : 'AC2fced2ad58603acca7bfe0abbb361139',
       'authToken' : '91d6e96128cdc7e5cf135b10efe09d51',
       'fromPhone' : '+5531933007100'
   },
      'templateGlobals' : {
      'appName' : 'UptimeChecker',
      'companyName' : 'NotARealCompany, Inc',
      'yearCreated' : '2019',
      'baseUrl' : 'http://localhost:3000/'
   }
 };

 // Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;