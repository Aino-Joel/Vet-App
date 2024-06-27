const express = require('express')
const { signupUser, loginUser, allUsers, applyDoctor } = require('../controllers/userController')
const {requireAuth} = require("../middleware/requireAuth");

const router = express.Router()

router.get('/', requireAuth, allUsers)

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

//apply doctor account
router.post("/apply-doctor-account", requireAuth, applyDoctor)

module.exports = router