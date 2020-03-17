const User = require('../models/userModel')

const createUser = (req, res) => {
    const UserInput = req.body.data

    //checking to see whether body is empty, aka if the user
    //hasn't submitted anything, throw an error
    if (!UserInput) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }
        
    //creating a new user model to store our newly found data <3
    const user = new User(UserInput)
    
    //if we're on the first step of the sign up process, then
    //we must create a new user instance
    //Where's my goddamn oscar.
    //creating the new user right here
    //right now
    user
    .insertOne(
        {
            //creating the new user with the data from step 1
            email: user.email,
            password: user.email,
            name: user.name,
            address: user.address,
            city: user.city,
            state: user.state,
            zip: user.zip
        }
    )
    .then(() => {
        return res.status(201).json(
        {
            id: user._id,
            message: "Step 1 succeeded. Check DB for entry"
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Step 1 not successful!',
        })
    })
}

module.exports = {
    createUser
}