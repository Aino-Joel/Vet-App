const express = require("express");
const {
  getDoctors,
  getDoctor,
  //   updateDoctor,
} = require("../controllers/doctorController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

//GET all Doctors
router.get("/", requireAuth, getDoctors);

//GET single
router.get("/:id", requireAuth, getDoctor);

//UPDATE a Doctor
// router.patch("/:id", updateDoctor);

module.exports = router;
