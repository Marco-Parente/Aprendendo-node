/*
 * Primary file for the API
 *
 */ 

// Dependencies
var server = require('./lib/server');
var workers = require('./lib/workers');
 var cli = require('./lib/cli');

// Declare the app
var app = {};

// Global variable that strict should catch
foo = 'bar';

// Init function
app.init = function(){
   // Start the server
   server.init();

   // Start the workers
   workers.init();

   // Start the cli, make sure it starts last
   setTimeout(function(){
      cli.init();
},50);
};

// Execute
app.init();

// Export the app
module.exports = app;