/* 
 * Create and export configuration variables
 *
 */

 // Container for allthe environments
 var environments = {};

 // staging (default) environment 
 environments.staging = {
    'port' : 3000,
    'envName' : 'staging'
 };

 // production environments
 environments.production = {
    'port' : 5000,
    'envName' : 'production'
 };

 // Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environmentToExport.staging;

// Export the module
module.exports = environmentToExport;