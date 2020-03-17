const express = require('express')
const router = express.Router()
const UserCtlr = require('../controllers/userscontrollers')

router.post('/create-user', UserCtlr.createUser);