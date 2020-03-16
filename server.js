var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Requires the User model for accessing the Users collection
var User = require("./models/userModel.js");

// Initialize Express
var app = express();

// Middleware
// Morgan logger logs requests
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to mongo
mongoose.connect("mongodb://localhost/membersdb", { useNewUrlParser: true });

// Route for adding new member
app.post("/submit", function(req, res) {
    // Create new user using req.body
    User.create(req.body)
    .then(function(dbUser) {
        res.json(dbUser);
    })
    .catch(function(err) {
        res.json(err);
    });
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});