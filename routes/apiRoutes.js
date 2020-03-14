const User = require('../userModel')

const createUser = (req, res) => {
    const body = req.body

    //checking to see whether body is empty
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    //creating a new user instance
    const user = new User(body) 
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    //Checking whether it's the first page of the sign up or the second
    //if the body has an email field which is not empty then store it, it means that there's no ID created yet
    if (user.email) {
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
    //Whereas, if the user has already gone through step 1 of registratin
    //then we need to lookup the id created and update the remaining fields
    else {
        user
        .update(
            {_id: user._id}, //query to find
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
