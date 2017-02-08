var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//serve up assets folder and all content as static files from server to client.
app.use(express.static(path.join(__dirname,'public')));

//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
  extended: false
}));

//Import Routes.js and use this for all routing.
const routes = require('./routing/apiRoutes.js');
app.use('/', routes);

//Ternary operator. If process.env.port is undefined, we use 9001. In either case, log result.
app.listen(process.env.PORT || 9001,function(){
  process.env.PORT == undefined? console.log("App listening on PORT OVER 9000!!"):console.log("App listening on PORT" + process.env.PORT);
});