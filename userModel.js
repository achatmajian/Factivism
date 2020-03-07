var mongoose = require("mongoose");

// Schema constructor
var Schema = mongoose.Schema;

// create new UserSchema object
var UserSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: "firstname is Required"
    },
    lastname: {
        type: String,
        trim: true,
        required: "lastname is Required"
    },
    streetname: {
        type: String,
        trim: true,
        required: "streetname is Required"
    },
    cityname: {
        type: String,
        trim: true,
        required: "cityname is Required"
    },
    state: {
        type: String,
        trim: true,
        maxlength: 2,
        minlength: 2,
        required: "state is Required"
    },
    zipcode: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 5,
        required: "zipcode is Required"
    },
    politicalsurvey: {
    },
    // username but it's really the email field
    username: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 15,
        required: "password is Required"
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;