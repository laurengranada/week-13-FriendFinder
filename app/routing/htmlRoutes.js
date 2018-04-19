// dependencies
var path = require("path");

// parameter app (using express) 
module.exports = function(app){
	//route for quiz button to redirect to survey page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

	//route for homepage
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"))
	})
}