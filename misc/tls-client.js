/*
 *
 * This is an example TLS client
 * Connects to port 6000 and sends the word "ping" to server
 */

// Dependencies
var tls = require('tls');
var fs = require('fs');
var path = require('path');

// Server options
var options = {
    'ca' : fs.readFileSync(path.join(__dirname,'/../https/cert.pem')) // Only required becauser we're using self signed certificates
}

// Define the message
outboundMessage = 'ping';

var client = tls.connect(6000,options, function(){
    // Send the message
    client.write(outboundMessage);
});

// When the server writes back, log what it said, then kill the client
client.on('data',function(inboundMessage){
    var messageString = inboundMessage.toString();
    console.log('I wrote ' + outboundMessage + ' and they said: '+ messageString);
    client.end();
});