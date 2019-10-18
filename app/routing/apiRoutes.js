var friends= require("../data/friends")
modules.exports = function(app){
    app.post("/api/friends", function(req, res) {
        var newDater = req.body;
        console.log(newDater);
        res.json(newDater);
        var bestMatch = {
            name:"", photo:""
        }
        for (var i = 0; i < friends.length; i++){
            var currentFriend = friends[i];
            var scoreDifference = 0;
            for (var j = 0; j < currentfFriend.scores.length; j++){
                var currentScore = currentFriend.score[j];
                var newScore = newDater.score[j];
                scoreDifference += Math.abs(parseInt(currentScore) - parseInt(newScore))            
            }
            if
            
        }

    })    

  app.get("/api/friends", function(req, res) {
      console.log(dater);
      res.json(dater);
  })
}
