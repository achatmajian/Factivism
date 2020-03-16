var mongoose = require("mongoose");

// Schema constructor
var Schema = mongoose.Schema;

// create new UserSchema object
var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        required: "firstname is Required"
    },
    address: {
        type: String,
        trim: true,
        required: "streetname is Required"
    },
    city: {
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
    zip: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 5,
        required: "zipcode is Required"
    },
    abortion_stance: {
        type: String,
        trim: true
    },
    border_wall_stance: {
        type: String,
        trim: true
    },
    charter_schools_stance: {
        type: String,
        trim: true
    },
    climate_change_stance: {
        type: String,
        trim: true
    },
    gun_control_stance: {
        type: String,
        trim: true
    },
    obamacare_stance: {
        type: String,
        trim: true
    },
    student_loans_stance: {
        type: String,
        trim: true
    },
    marijuana_stance: {
        type: String,
        trim: true
    },
    israel_stance: {
        type: String,
        trim: true
    }, 
    military_spending_stance: {
        type: String,
        trim: true
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;