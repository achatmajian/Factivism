var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

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
mongoose.connect("mongodb://localhost/membersdb", { useNewUrlParser: true });

// Route for adding new member
app.post("/create-user", function(req, res) {
    // Create new user using req.body
    const userInput = req.body;
    user.create(userInput, (err, found) => err ? console.log(err) : (res.json(found))
});
app.put("/update-user/:id", function (req,res){
    //update user based on quiz answers
    const userInput = req.body;
    console.log(req.body);
    user.update({"_id": id}, userInput), (err, found) => err ? console.log(err) : res.json(found))
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});