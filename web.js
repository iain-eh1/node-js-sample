var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileBuffer = fs.readFileSync('index.html');
  var fileString = fileBuffer.toString();
  response.send(fileString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
