/*
 * These are the request handlers
 *
 */

 //Dependencies
var _data = require('./data');
var helpers = require('./helpers');
var config = require('./config');
var _url = require('url');
var dns = require('dns');
const {performance, PerformanceObserver} = require('perf_hooks');
var util = require('util');
var debug = util.debuglog('performance');

// TESTE
var obs = new PerformanceObserver((items) => {
    items.getEntries().forEach((item) => {
        debug('\x1b[33m%s\x1b[0m', item.name+' ' + item.duration);
    })
});
obs.observe({entryTypes: ['measure']});

// Define handlers
 var handlers = {};

/*
 * HTML Handlers
 *
 */

// Index
handlers.index = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Uptime Monitoring - Made Simple',
        'head.description' : 'Offering free simple uptime monitoring for HTTP and HTTPS sites, when sites go down, we send a sms to let you know',
        'body.class' : 'index'
      };
      // Read in a template as a string
      helpers.getTemplate('index',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Create Account
handlers.accountCreate = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Create an Account',
        'head.description' : 'Signup is easy and only takes a few seconds.',
        'body.class' : 'accountCreate'
      };
      // Read in a template as a string
      helpers.getTemplate('accountCreate',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Create new Session
handlers.sessionCreate = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Login to your Account',
        'head.description' : 'Please enter your phone number and your password to enter your account.',
        'body.class' : 'sessionCreate'
      };

      // Read in a template as a string
      helpers.getTemplate('sessionCreate',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Delete session
handlers.sessionDeleted = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Logged out',
        'head.description' : 'You have been logged out of your account',
        'body.class' : 'sessionDeleted'
      };

      // Read in a template as a string
      helpers.getTemplate('sessionDeleted',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Edit your account
handlers.accountEdit = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Account setting',
        'body.class' : 'accountEdit'
      };

      // Read in a template as a string
      helpers.getTemplate('accountEdit',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// EAccount has been deleted
handlers.accountDeleted = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Account deleted',
        'head.description' : 'Your account has been deleted',
        'body.class' : 'accountEdit'
      };

      // Read in a template as a string
      helpers.getTemplate('accountDeleted',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Create a new check
handlers.checksCreate = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Create a new check',
        'body.class' : 'checksCreate'
      };

      // Read in a template as a string
      helpers.getTemplate('checksCreate',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Dashboard (view all checks)
handlers.checksList = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Dashboard',
        'body.class' : 'checksList'
      };

      // Read in a template as a string
      helpers.getTemplate('checksList',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Edit a check
handlers.checksEdit = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
      // Prepare data for interpolation
      var templateData = {
        'head.title' : 'Check details',
        'body.class' : 'checksEdit'
      };

      // Read in a template as a string
      helpers.getTemplate('checksEdit',templateData,function(err,str){
        if(!err && str){
          // Add the universal header and footer
          helpers.addUniversalTemplates(str,templateData,function(err,str){
            if(!err && str){
              // Return that page as HTML
              callback(200,str,'html');
            } else {
              callback(500,undefined,'html');
            }
          });
        } else {
          callback(500,undefined,'html');
        }
      });
    } else {
      callback(405,undefined,'html');
    }
};

// Favicon
handlers.favicon = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
        // Read in the favicon's data
        helpers.getStaticAsset('favicon.ico',function(err,data){
            if(!err && data){
                callback(200,data,'favicon');
            } else {
                callback(500);
            }
        });
    } else {
        callback(405);
    }
};


// Public assets
handlers.public = function(data,callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
        // Get the filename being requested
        var trimmedAssetName = data.trimmedPath.replace('public/','').trim();
        if(trimmedAssetName.length > 0){
            // Read in the asset data
            helpers.getStaticAsset(trimmedAssetName,function(err,data){ 
                if(!err && data){
                    // Determine the content type (default to text)
                    var contentType = 'plain';
                    if(trimmedAssetName.indexOf('.css') > -1){
                        contentType = 'css';
                    }
                    if(trimmedAssetName.indexOf('.png') > -1){
                        contentType = 'png';
                    }
                    if(trimmedAssetName.indexOf('.jpg') > -1){
                        contentType = 'jpg';
                    }
                    if(trimmedAssetName.indexOf('.ico') > -1){
                        contentType = 'favicon';
                    }

                    // Callback the data
                    callback(200,data,contentType);
                } else {
                    callback(404);
                }
            });
        } else {
            callback(404);
        }
    } else {
        callback(405);
    }
};


/*
 * JSON API handler
 *
 */

// Example error
handlers.exampleError = function(){
    var err = new Error('This is an example error');
    throw(err);
};

// Users
handlers.users = function(data,callback){
    var acceptableMethods = ['post','get','put','delete'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._users[data.method](data,callback)
    } else {
        callback(405);
    }
};

// Container for the users submethods
handlers._users = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = function(data,callback){
    // Check that all required fields are filled out
    var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    var lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 12 ? data.payload.phone.trim() : false;
    var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
    var tosAgreement = typeof(data.payload.tosAgreement) == 'boolean' && data.payload.tosAgreement == true ? true : false;

    if(firstName && lastName && phone && password && tosAgreement){
        // Make sure that the user doesnt already exist
        _data.read('users',phone,function(err,data){
            if(err){
                // Hash the password
                var hashedPassword = helpers.hash(password);

                // Create the user object
                if(hashedPassword){
                    var userObject = {
                        'firstName' : firstName,
                        'lastName' : lastName,
                        'phone' : phone,
                        'hashedPassword' : hashedPassword,
                        'tosAgreement' : true 
                    };
    
                    // Store the user
                    _data.create('users',phone,userObject,function(err){
                        if(!err){
                            callback(200);
                        } else {
                            console.log(err);
                            callback(500,{'Error' : 'Could not create the new user'})
                        }
                    });
                } else {
                    callback(500,{'Error' : 'Could not hash the user\'s password'});
                }
                

            } else {
                // User already exists
                callback(400,{'Error' : 'A user with that phone number already exists'});
            }
        });
    } else {
        callback(400,{'Error' : 'Missing required fields'});
    }
};

// Users - get
// Required data: none
// Optional data: none
handlers._users.get = function(data,callback){
    // Check that the phone number is valid
    var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 12 ? data.queryStringObject.phone.trim() : false;
    if(phone){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the given token is valid for the phone number
        handlers._tokens.verifyToken(token,phone,function(tokenIsValid){
            if(tokenIsValid){
                // Lookup the user
                _data.read('users',phone,function(err,data){
                if(!err && data){
                    // Remove the hashed password from the user object before returning it to the requester
                    delete data.hashedPassword;
                    callback(200,data);
                } else {
                    callback(404);
                }
        });
            } else {
                callback(403,{'Error':'Missing required token in header, or token is invalid'})
            }
        });
    } else {
        callback(400, {'Error' : 'Missing require field'})
    }
};

// Users - put
// Required data : phone
// Optional data : firstName, lastName, password (at least one must be specified)
handlers._users.put = function(data,callback){
    // Check for the required field
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 12 ? data.payload.phone.trim() : false;

    // Check for the optional fields
    var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    var lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

    // Error if the phone is invalid
    if(phone){        
        // Error if nothing is sent to update
        if(firstName || lastName || password){
            // Get the token from the headers
             var token = typeof(data.headers.token) == 'string' ? data.headers.token : false; 
             
            // Verify that the given token is valid for the phone number
            handlers._tokens.verifyToken(token,phone,function(tokenIsValid){
                if(tokenIsValid){   
                    // Lookup the user
                   _data.read('users',phone,function(err,userData){
                        if(!err && userData){
                           if(firstName){
                                userData.firstName = firstName;
                            }
                        if(lastName){
                            userData.lastName = lastName;
                        }
                    if(password){
                        userData.hashedPassword = helpers.hash(password);
                    }
                    // Store the new update
                    _data.update('users',phone,userData,function(err){
                        if(!err){
                            callback(200);
                        } else {
                            console.log(err);
                            callback(500,{'Error' : 'Could not update the usser'});
                        }
                    });
                } else {
                    callback(400, {'Error' : 'The specified user does not exist'})
                }
            });                    
                } else {
                    callback(403,{'Error':'Missing required token in header, or token is invalid'})
                }
            });           
        } else {
            callback(400,{'Error' : 'Missing fields to update'})
        }
    } else {
        callback(400,{'Error' : 'Missing required field'})
    }
};

// Users - delete
// Required field : phone
handlers._users.delete = function(data,callback){
    // Check that the phone number is valid
    var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 12 ? data.queryStringObject.phone.trim() : false;
    if(phone){
    // Get the token from the headers
    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false; 
             
    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token,phone,function(tokenIsValid){
        if(tokenIsValid){   
            // Lookup the user
            _data.read('users',phone,function(err,userData) {
                if(!err && userData) {
                    _data.delete('users', phone,  function(err){
                        if(!err){
                            // Delete each of the checks associated with the user
                            var userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : []; 
                            var checksToDelete = userChecks.length;

                            if(checksToDelete > 0){
                                var checksDeleted = 0;
                                var deletionErrors = false;
                                // Loop through the checks
                                userChecks.forEach(function(checkId){
                                    // Delete the check
                                    _data.delete('checks',checkId,function(err){
                                        if(err){
                                            deletionErrors = true;
                                        }
                                        checksDeleted++;
                                        if(checksDeleted == checksToDelete){
                                            if(!deletionErrors){
                                                callback(200);
                                            } else {
                                                callback(500,{'Error':'Errors encountered while attempting to delete user\'s checks. All checks may not have been deleted succesfully.'});
                                            }
                                        }
                                    });
                                });
                            } else {
                                callback(200);
                            }
                        } else {
                            callback(500,{'Error':'Could not delete the specified user'})
                        }
                    })
                } else {
                callback(400, 'Could not find specified user');
                }
            });
        } else {
            callback(403,{'Error':'Missing required token in header, or token is invalid'})
        }
    });
    } else {
        callback(400, {'Error' : 'Missing required field'})
    }
};

// Tokens
handlers.tokens = function(data,callback){
    var acceptableMethods = ['post','get','put','delete'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._tokens[data.method](data,callback)
    } else {
        callback(405);
    }
};

 // Container for all the tokens mathods
 handlers._tokens = {};

// Tokens - post
// Required data : phone and password
handlers._tokens.post = function(data,callback){
    performance.mark('entered function');
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 12 ? data.payload.phone.trim() : false;
    var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
    performance.mark('inputs validated');
    if(phone && password){
        // Lookup the user who matches that phone number
        performance.mark('beginning user lookup');
        _data.read('users',phone,function(err,userData){
            performance.mark('user lookup complete');
            if(!err && userData){
                // Hash the sent password and compare it to the password stored
                performance.mark('beginning password hashing');
                var hashedPassword = helpers.hash(password);
                performance.mark('password hashing complete');
                if(hashedPassword == userData.hashedPassword){
                    // If valid, create a token with a random name. Set expiration date one hour in the future
                    performance.mark('creating data for token');
                    var tokenId =  helpers.createRandomString(20);
                    var expires = Date.now() + 1000 * 60 * 60;
                    var tokenObject = {
                        'phone' : phone,
                        'id' : tokenId,
                        'expires' : expires 
                    }

                    // Store the token
                    performance.mark('beginning storing token');
                    _data.create('tokens',tokenId,tokenObject,function(err){
                        performance.mark('storing token complete');

                        // Gather all the measurements
                        performance.measure('Beginning to end','entered function','storing token complete');
                        performance.measure('Validating user input','entered function','inputs validated');
                        performance.measure('User lookup','beginning user lookup','user lookup complete');
                        performance.measure('Password hashing','beginning password hashing','password hashing complete');
                        performance.measure('Token data creation','creating data for token','storing token complete');
                        performance.measure('Token storing','beginning storing token','storing token complete');

                        // Log out all the measuments
                        //var measurements = performance.getEntriesByType('measure');
                        //measurements.forEach(function(measurement){
                        //    debug('\x1b[33m%s\x1b[0m', measurement.name+' ' + measurement.duration);
                        //});

                        if(!err){
                            callback(200, tokenObject);
                        } else {
                            callback(500,{'Error' : 'Could not create the new token'})
                        }
                    });
                } else {
                    callback(400,{'Error' : 'Password did not match the specified user\'s stored password'})
                }
            } else { 
                callback(400,{'Error' : 'Could not find the specified the user'});
            }
        });
    } else {
        callback(400, {'Error' : 'Missing required field(s)'});
    }
};

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function(data,callback){
// Check that the id is valid 
var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
if(id){
    // Lookup the token
    _data.read('tokens',id,function(err,tokenData){
        if(!err && tokenData){
        callback(200,tokenData);
        } else {
            callback(404);
        }
    });
} else {
callback(400, {'Error' : 'Missing required field'})

}
};

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function(data,callback){
    var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
    var extend = typeof(data.payload.extend) == 'boolean' && true ? true : false;
    if(id && extend){
        // Lookup the token
        _data.read('tokens',id,function(err,tokenData){
            if(!err && tokenData){
                // Check to make sure if the token isn't already expired
                if(tokenData.expires > Date.now()){
                    // Set the expiration an hour from now
                    tokenData.expires = Date.now() + 1000 * 60 * 60;

                    // Store the new updates
                    _data.update('tokens',id,tokenData,function(err){
                        if(!err){
                            callback(200);
                        } else {
                            callback(500,{'Error':'Could not update the token\'s expiration'});
                        }
                    });
                } else {
                    callback(400,{'Error' : 'Token has already been expired and cannot be extended'})
                }
            } else {
                callback(400,{'Error' : 'Specified token does not exist'})
            }
        });
    } else {
        callback(400,{'Error' : 'Missing required field(s) or field(s) are invalid'})
    }

};

// Tokens - delete
// Require data: id
// Optional data: none
handlers._tokens.delete = function(data,callback){
    // Check that the id is valid
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
    if(id){
        // Lookup the token
        _data.read('tokens',id,function(err,data) {
            if(!err && data) {
                _data.delete('tokens', id,  function(err){
                        callback(200, 'Token deleted.')
                })
            } else {
               callback(400, 'Could not find specified token');
            }
        });
    } else {
        callback(400, {'Error' : 'Missing required field'})
    }
};

// Verify if a token id is currently valid for a given user
handlers._tokens.verifyToken = function(id,phone,callback){
    // Lookup the token
    _data.read('tokens',id,function(err,tokenData){
        if(!err && tokenData){
            // Check that the token is for the given user and has not expired
            if(tokenData.phone == phone && tokenData.expires > Date.now()){
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false);
        }
    });
};

// Checks
handlers.checks = function(data,callback){
    var acceptableMethods = ['post','get','put','delete'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._checks[data.method](data,callback)
    } else {
        callback(405);
    }
};

// Container for all the checks methods
handlers._checks = {};

// Checks - POST
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none
handlers._checks.post = function(data,callback){
    // Validate inputs
 
    var protocol = typeof(data.payload.protocol) == 'string' && ['https','http'].indexOf(data.payload.protocol) > -1  ? data.payload.protocol : false;
    var url = typeof(data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false;
    var method = typeof(data.payload.method) == 'string' && ['post','get','put','delete'].indexOf(data.payload.method) > -1  ? data.payload.method : false;
    var successCodes = typeof(data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
    var timeoutSeconds = typeof(data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;

    if(protocol && url && method && successCodes && timeoutSeconds){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;

        // Lookup the user by reading the token
        _data.read('tokens',token,function(err,tokenData){
            if(!err && tokenData){
                var userPhone = tokenData.phone;

                // Lookup the user data
                _data.read('users',userPhone, function(err,userData){
                    if(!err && userData){
                        var userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];

                        // Verify that the user has less than the number of max-checks-per-user
                        if(userChecks.length < config.maxChecks){

                            // Verify that the url given has dns entries (and therefore can resolve)
                            var parsedUrl = _url.parse(protocol+'://'+url,true);
                            var hostName = typeof(parsedUrl.hostname) == 'string' && parsedUrl.hostname.length > 0 ? parsedUrl.hostname : false;
                            dns.resolve(hostName,function(err,records){
                                if(!err && records){
                                    // Create a random id for the check
                                    var checkId = helpers.createRandomString(20);
                                    // Create the check object and include the user's number
                                    var checkObject = {
                                        'id' : checkId,
                                        'userPhone' : userPhone,
                                        'protocol' : protocol,
                                        'url' : url,
                                        'method' : method,
                                        'successCodes' : successCodes,
                                        'timeoutSeconds' : timeoutSeconds
                                    };
                                   // Save the object
                                    _data.create('checks',checkId,checkObject,function(err){
                                        if(!err){
                                            // Add the check id to the user's object 
                                            userData.checks = userChecks;
                                            userData.checks.push(checkId);
                                            //Save the new user data
                                            _data.update('users',userPhone,userData,function(err){
                                                if(!err){
                                                    // Return the data about the new check
                                                    callback(200,checkObject);
                                                } else {
                                                    callback(500,{'Error':'Could not update the user with the new check'})
                                                }
                                            });
                                        } else {
                                            callback(500,{'Error' : 'Could not create the new check'});
                                        }
                                    });
                                } else {
                                    callback(400,{'Error':'The hostname of the URL entrered did not resolve to any DNS entries'});
                                }
                            });
                        } else {
                            callback(400,{'Error':'The user already has the maximum number of checks ('+config.maxChecks+')'})
                        }
                    } else {
                        callback(403);
                    }
                });
            } else {
                callback(403)
            }
        });
    } else {
        callback(400,{'Error':'Missing required inputs, or inputs are invalid'})
    }
};


// Checks - GET
// Rquired data: id
// Optional data: none
handlers._checks.get = function(data,callback){
    // Check that the id number is valid
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
    if(id){
        // Lookup the check
        _data.read('checks',id,function(err,checkData){
            if(!err && checkData){
                // Get the token from the headers
                var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
                // Verify that the given token is valid fand belongs to the user who created the check
                handlers._tokens.verifyToken(token,checkData.userPhone,function(tokenIsValid){
                    if(tokenIsValid){
                        // Return the check data
                        callback(200,checkData);
                    } else {
                        callback(403);
                    }
                });
            } else {
                callback(404)
            }
        });    
    } else {
        callback(400, {'Error' : 'Missing require field'})
    }
};

// checks - PUT
// Required data: id
// Optional data: protocol, url, method, success codes, timeoutSecods, one must be sent
handlers._checks.put = function(data, callback){
    // Check for the required field
    var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id .trim() : false;

    // Check for the optional fields
    var protocol = typeof(data.payload.protocol) == 'string' && ['https','http'].indexOf(data.payload.protocol) > -1  ? data.payload.protocol : false;
    var url = typeof(data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false;
    var method = typeof(data.payload.method) == 'string' && ['post','get','put','delete'].indexOf(data.payload.method) > -1  ? data.payload.method : false;
    var successCodes = typeof(data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
    var timeoutSeconds = typeof(data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;
    console.log(protocol,url,method,successCodes,timeoutSeconds);
    // Make sure the id is valid
    if(id){
        // Check if at least one optional field is sent
        if(protocol || url || method || successCodes || timeoutSeconds){
            // Lookup the check
            _data.read('checks',id,function(err,checkData){
                if(!err && checkData){
                    // Get the token from the headers
                    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;
                    // Verify that the given token is valid fand belongs to the user who created the check
                    handlers._tokens.verifyToken(token,checkData.userPhone,function(tokenIsValid){
                        if(tokenIsValid){
                            // Update the check where it's necessary
                            if(protocol){
                                checkData.protocol = protocol
                            }
                            if(url){
                                checkData.url = url;
                            }
                            if(method){
                                checkData.method = method;
                            }
                            if(successCodes){
                                checkData.successCodes = successCodes;
                            }
                            if(timeoutSeconds){
                                checkData.timeoutSeconds = timeoutSeconds;
                            }

                            // Store new updates
                            _data.update('checks',id,checkData,function(err){
                                if(!err){
                                    callback(200);
                                } else {
                                    callback(500,{'Error':'Could not update the check'});
                                }
                            });
                        } else {
                            callback(403);
                        }
                    });
                } else {
                    callback(400,{'Error':'Check ID did not exist'})
                }
            });
        } else {
            callback(400,{'Error':'Missing fields to update'})
        }
    } else {
        callback(400,{'Error':'Missing required fields'})
    }
};

// Checks - DELETE
// Required data: id
// Optional data: none
handlers._checks.delete = function(data,callback){
    // Check that the id number is valid
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
    if(id){
        // Lookup the check
        _data.read('checks',id,function(err,checkData){
            if(!err && checkData){
                // Get the token from the headers
                var token = typeof(data.headers.token) == 'string' ? data.headers.token : false;    
                // Verify that the given token is valid for the phone number
                handlers._tokens.verifyToken(token,checkData.userPhone,function(tokenIsValid){
                    if(tokenIsValid){   
                        // Delete the check data
                        _data.delete('checks',id,function(err){
                            if(!err){
                                // Lookup the user
                                _data.read('users',checkData.userPhone,function(err,userData) {
                                    if(!err && userData) {
                                        var userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : []; 

                                        // Remove the deleted check from their list of checks
                                        var checkPosition = userChecks.indexOf(id);

                                        if(checkPosition > -1){
                                            userChecks.splice(checkPosition,1);
                                            // Re-save the user data
                                            _data.update('users', checkData.userPhone, userData,  function(err){
                                                if(!err){
                                                    callback(200);
                                                } else {
                                                    callback(500, {'Error':'Could not update the user'});
                                                }
                                            })
                                        } else {
                                            callback(500,{'Error':'Could not find the check on the user\'s object, so could not delete it'})
                                        }
                                    } else {
                                    callback(500, {'Error':'Could not find the user who created the check'});
                                    }
                                });
                            } else {
                                callback(500,{'Error':'Could not delete the check data'})
                            }
                        });
                    } else {
                        callback(403);
                    }
                });
            } else {
                callback(400,{'Error':'The specified check id doesn\'t exist'});
            }
        });
    } else {
        callback(400, {'Error' : 'Missing required field'})
    }
};


// Not Found handler
handlers.notFound = function(data,callback){
   callback(404);
};

// Ping handler
handlers.ping = function(data,callback){
   callback(200);
};

// Export the module
module.exports = handlers;