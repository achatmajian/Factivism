var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongoDB = "mongodb+srv://jeremygill:password123@factivismcluster-2ye5e.gcp.mongodb.net/membersdb?retryWrites=true&w=majority";

var PORT = 3001;

// Requires the User model for accessing the Users collection
var user = require("./models/userModel.js");

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
app.post("/create-user", function(req, res) {
    console.log(req.body);
    // Create new user using req.body
    const userInput = req.body;
    user.create(userInput, (err, found) => err ? console.log(err) : res.json(found))
});

app.put("/update-user/:id", function (req, res) {
    // update user based on quiz answers
    const userInput = req.body;
    console.log(req.body);
    // how do we know the id?
    user.update({"_id": id}, userInput, (err, found) => err ? console.log(err) : res.json(found))
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});

// mongodb+srv://jeremygill:password123@factivismcluster-2ye5e.gcp.mongodb.net/membersdb?retryWrites=true&w=majority