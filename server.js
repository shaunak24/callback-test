var express = require('express');
var app = express();
var fs = require('fs');

app.post('/fb_callback', function (req, res) {
  console.log(req);
  res.sendStatus(200);
});

app.post('/xml_callback', function (req, res) {
  console.log(req);
  res.sendStatus(200);
});

app.post('/error_503', function (req, res) {
  console.log(req);
  res.sendStatus(503);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('REST API demo app listening at http://%s:%s', host, port);
});
