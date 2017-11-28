// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//create static public folder
app.use(express.static("./public"));

// react router route
app.get("*", function(req, res) {
    res.writeHead(200, {'Cache-Control': 'no-cache'});
    res.sendFile(__dirname + "/public/index.html");
});

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});