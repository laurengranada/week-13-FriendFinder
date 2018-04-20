//require files
var friends = require("../data/friends.js");

// parameter app (using express) 
module.exports = function(app){
	// route to view friends
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});
	app.post("/api/friends", function(req, res){
		//object for comparison
		var mostCompatible = {
			name: "",
			photo: "",
			differenceBetween: 1000,
		};
		//object that holds user data
		var userData = req.body;
		// parsing the scores from the user data
		var userScore = userData.scores;
		// variable to compare user data with friends data
		var totalDifference = 0;
		//for loop to go through friends data
		for (var i = 0; i < friends.length; i++){
			//console.log the friend name
			console.log(friends[i].name);
			//list variable locally
			totalDifference = 0;
			// for loop to go through for scores of same friend data
			for (var j = 0; j <friends[i].scores[j]; j++){
				totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

				if(totalDifference <= mostCompatible.differenceBetween){
					mostCompatible.name = friends[i].name;
					mostCompatible.photo = friends[i].photo;
					mostCompatible.differenceBetween = totalDifference;
				}
			}

		}
		// friends.push(userData);
		res.json(mostCompatible);
	});
};