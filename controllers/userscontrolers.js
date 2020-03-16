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
    //how we know the user is in the first step?
    //body.data.email must not be empty!!!!!!!!!!!
    //Where's my goddamn oscar.
    if(UserInput.email) {

        //creating the new user right here
        //right now
        user
        .insertOne(
            {
                //creating the new user with the data from step 1
                email: user.email,
                password: user.email,
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
    //ok, now we have to check whether the user has entered their info on the second page
    //how do we know that? 
    //because we have an _id dummy! This is why everything's consolidated
    //otherwise it's a pain in the bum.
    else {
        user
        .update(
            {_id: user._id}, //query to find the proper _id from previous step :)))))
            {
                //data to update
                name: user.name,
                address: user.address,
                city: user.city,
                state: user.state,
                zip: user.zip
            })
        .then(() => {
            return res.status(201).json({
                message: "Step 2 succeeded. Check DB for entry"
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
    }
}

module.exports = {
    createUser
}