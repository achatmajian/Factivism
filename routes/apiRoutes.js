const express = require('express')
const router = express.Router()
const UserCtlr = require('../controllers/usersControllers')

router.post('/create-user', UserCtlr.createUser);