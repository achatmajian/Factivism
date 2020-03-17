var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongoDB = "mongodb+srv://jeremygill:password123@factivismcluster-2ye5e.gcp.mongodb.net/membersdb?retryWrites=true&w=majority";

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
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

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

// mongodb+srv://jeremygill:password123@factivismcluster-2ye5e.gcp.mongodb.net/membersdb?retryWrites=true&w=majority