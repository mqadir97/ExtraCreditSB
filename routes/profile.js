var profData = require('../sb.json');


exports.viewProfile = function(req, res) { 
  // controller code goes here 
  
  res.render('profile1');
};

exports.showProfile = function(req, res) { 
  // controller code goes here 
  var prof = req.params.id;
  
  res.render('profile', profData .profile[prof]);
};



var data = require("../studybuddies.json");

exports.addBuddy=function(req,res){
	var BuddyName = req.query.name;
	//var ClassDescription = req.query.description;
	var newBuddy =
	{
		"name": BuddyName,
		//"description": ClassDescription,
		//"imageURL": "https://placebeard.it/400/400"
	};
	console.log(newBuddy);
	data.studybuddy.push(newBuddy);
	var newBuddyProf =
	{
		"name": BuddyName,
		"about": "I am premed student. i enjoy going to beaches. feel free to contact me."
		//"description": ClassDescription,
		//"imageURL": "https://placebeard.it/400/400"
	};
	profData.profile.push(newBuddyProf);
	res.render('studybuddy', data);
}

