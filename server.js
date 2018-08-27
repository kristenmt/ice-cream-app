// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Serve static content for this app from the public directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/icecream_controller.js");

app.use(routes);

app.listen(PORT, function() {

    console.log("Server is listening on: http://localhost:" + PORT);
    
});