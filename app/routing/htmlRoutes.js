// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3200;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newDater = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newDater);
//   mysql.set(newDater.name, newDater.last, newDater.phone, newRes.email, newRes.id, newRes.table, newRes.size);

  res.json(newDater);
});

app.get("/api/friends", function(req, res) {
    var dater = getInfo();
    console.log(dater);
    res.json(dater);
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// function getInfo(){
//     return mysql.get();
}
