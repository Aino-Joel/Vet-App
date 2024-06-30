const express = require('express')
const { getUsers, getDoctors } = require('../controllers/adminControllers')
const {requireAuth} = require("../middleware/requireAuth");

const router = express.Router()

//all Users
router.get('/users', requireAuth, getUsers)

//all Doctors
router.get('/doctors', requireAuth, getDoctors)

module.exports = router