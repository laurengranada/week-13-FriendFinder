// dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//set PORT
var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
//hosts entire public folder as static - this allows my css to show
app.use(express.static('./app/public'))

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


//require files for routes
// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//console.log PORT to make sure it's running
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
