/*
 *
 * This is an example tcp (net) client
 * Connects to port 6000 and sends the word "ping" to server
 */

// Dependencie
var net = require('net');

// Define the message
outboundMessage = 'ping';

var client = net.createConnection({'port' : 6000}, function(){
    // Send the message
    client.write(outboundMessage);
});

// When the server writes back, log what it said, then kill the client
client.on('data',function(inboundMessage){
    var messageString = inboundMessage.toString();
    console.log('I wrote ' + outboundMessage + ' and they said: '+ messageString);
    client.end();
});