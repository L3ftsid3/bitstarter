var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = fs.readFileSync("index.html", "utf-8");
  var b2s = buffer.toString('utf-8');
  response.send(b2s);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
