/*
 *
 * This is an example tcp (net) server
 * Listens to port 6000 and sends the word "pong" to client
 */

// Dependencies
var net = require('net');

// Create server
var server = net.createServer(function(connection){
    // Send the word pong
    var outboundMessage = 'pong';
    connection.write(outboundMessage);

    // When the client writes something, log it out
    connection.on('data',function(inboundMessage){
        messageString = inboundMessage.toString();
        console.log('I wrote ' + outboundMessage + ' and they said: '+ messageString);
    });
});

// Listen 
server.listen(6000);