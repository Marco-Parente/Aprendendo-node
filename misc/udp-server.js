/*
 * This is an example udp server
 * Create an UDP datagram server listening on 6000
 */

// Dependencies
var dgram = require('dgram');

// Creating a server
var server = dgram.createSocket("udp4");

server.on('message',function(messageBuffer,sender){
    // Do something with an incoming message or do something with the sender
    var messageString = messageBuffer.toString();
    console.log(messageString);
});

// Start the server
server.bind(6000);