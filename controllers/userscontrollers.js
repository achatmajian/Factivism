const User = require('../models/userModel')

const createUser = (req, res) => {
    const userInput = req.body.data

    //checking to see whether body is empty, aka if the user
    //hasn't submitted anything, throw an error
    if (!userInput) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }
        
    //creating a new user model to store our newly found data <3
    const user = new User(userInput)
    
    //if we're on the first step of the sign up process, then
    //we must create a new user instance
    //Where's my goddamn oscar.
    //creating the new user right here
    //right now
    user
    .insertOne(
        {
            //creating the new user with the data from the singup page
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
            message: "Signup succeeded. Check DB for entry"
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Signup not successful!',
        })
    })
}

const updateUser = (req, res) => {
    const userInput = req.body.data

    //checking to see whether body is empty, aka if the user
    //hasn't submitted anything, throw an error
    if (!userInput) {
        return res.status(400).json({
            success: false,
            error: 'You must provide answers to the quiz',
        })
    }
    
    
    //find the user with the corresponding id and update with quiz answers
    user.update(
        { _id: userInput._id  },
        {
          $set: {
            abortion_stance: userInput.abortion_stance,
            border_wall_stance: userInput.border_wall_stance,
            charter_schools_stance: userInput.charter_schools_stance,
            climate_change_stance: userInput.climate_change_stance,
            gun_control_stance: userInput.gun_control_stance,
            obamacare_stance: userInput.obamacare_stance, 
            student_loans_stance: userInput.student_loans_stance,
            marijuana_stance: userInput.marijuana_stance,
            israel_stance: userInput.israel_stance,
            military_spending_stance: userInput.military_spending_stance
          }
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
    createUser, //signup
    updateUser //quiz
}