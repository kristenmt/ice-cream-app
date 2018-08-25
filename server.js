// Dependencies
var express = require("express");
var bodyParser = require("body_parser");

var PORT = process.env.PORT || 8080;

var app = express();
// Serve static content for this app from the public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("veiw engine", "handlebars");

var routes = require("./controllers/icecream_controller.js");

app.use(routes);

app.listen(PORT, function() {

    console.log("Server is listening on: http://localhost:" + PORT);
    
});