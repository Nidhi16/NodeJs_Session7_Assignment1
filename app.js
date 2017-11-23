// Load the http module to create an http server.
var http = require('http');

// Configure HTTP server to respond with addition of two numbers to all requests.
var server = http.createServer(function(request, response){
    response.writeHead('200', {'Content-Type': 'text/plain'});
    var sum = 5 + 10;
    console.log("Sum of two numbers 5 and 10 is " + sum);
    response.write("Sum of two numbers 5 and 10 is " + sum);
    response.end();
});

// Listen on port 8000
server.listen(8000);