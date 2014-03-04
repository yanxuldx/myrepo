#!/usr/bin/env node

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var infile = "index.html";
  var buffer = fs.readFileSync(infile);
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
