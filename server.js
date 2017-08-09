var express = require("express");
var parser = require('ua-parser-js');
var app = express();

app.get("/", function(request, response) {
  var ip = request.headers['x-forwarded-for'].slice(0,15);
  var lan = request.get('accept-language').slice(0,5);
  var sof = parser(request.get('user-agent')).os.name + ' ' + parser(request.get('user-agent')).os.version;
  var resObject = {
    ipaddress:ip,
    language:lan,
    software:sof
  }
  response.send(resObject);
});
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
