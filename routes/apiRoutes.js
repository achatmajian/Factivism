const express = require('express')
const router = express.Router()
const UserCtlr = require('../controllers/userscontrolers')

router.post('/create-user', UserCtlr.createUser);