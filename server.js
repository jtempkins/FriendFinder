var express = require("express");

var app = express();
var PORT = 3200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app)
















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

