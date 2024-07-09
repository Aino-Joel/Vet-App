const express = require("express");
const { getUsers, getDoctors, declineDoctor, approveDoctor } = require("../controllers/adminControllers");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

//all Users
router.get("/users", requireAuth, getUsers);

//all Doctors
router.get("/doctors", requireAuth, getDoctors);

//approve doctor
router.post("/doctors/approve/:id", requireAuth, approveDoctor);

//decline doctor
router.post("/doctors/decline/:id", requireAuth, declineDoctor);

module.exports = router;
