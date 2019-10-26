var friends = require("../data/friends")
var express = require("express");
var $ = require("jquery");

module.exports = function(app){


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// console.log(friendless)


    app.post("/api/friends", function(req, res) {
        var friendless = req.body;
        console.log(friendless);
        res.json(friendless);

    //     var bestMatch = {
    //         name: "", photo: ""
    //     }
    //     for (var i = 0; i < friends.length; i++){
    //         var currentFriend = friends[i];
    //         var scoreDifference = 0;
    //     for (var j = 0; j < currentFriend.scores.length; j++){
    //             var currentScore = currentFriend.scores[j];
    //             var newScore = friendless.scores;
    //                 scoreDifference += Math.abs(parseInt(currentScore) - parseInt(newScore))            
    //         }
    //         if (scoreDifference < totalDifference) {
	// 			console.log('Closest match found = ' + diff);
	// 			console.log('Friend name = ' + friends[i].name);
	// 			console.log('Friend image = ' + friends[i].photo);

	// 			totalDifference = diff;
	// 			bestMatch = friends[i].name;
            
    //     }

    // }});    

  app.get("/api/friends", function(req, res) {
      res.json(friends);
  });
})}
