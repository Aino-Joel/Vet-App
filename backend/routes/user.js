const express = require('express')
const { signupUser, loginUser, allUsers } = require('../controllers/userController')
const {requireAuth} = require("../middleware/requireAuth");

const router = express.Router()

router.get('/', requireAuth, allUsers)

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router