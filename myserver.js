var http = require("http");


var PORTA = 7000;
var PORTB = 7500;


function handleRequest(request, response) {


  response.end("Your Code Is On Point" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORTA, function() {


  console.log("Server listening on: http://localhost:" + PORTA);



});


function handleNewRequest(request, response) {


  response.end("Your Code Needs Work" + request.url);
}

var newServer = http.createServer(handleNewRequest);

newServer.listen(PORTB, function() {


  console.log("Server listening on: http://localhost:" + PORTB);



});
