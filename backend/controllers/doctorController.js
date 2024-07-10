const Doctor = require("../models/doctorModel");
const mongoose = require("mongoose");

//get all Doctors
const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({ status: "approved" });

  res.status(200).json(doctors);
};

//get single Doctor
const getDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor" });
  }

  const doctor = await Doctor.findById(id);

  if (!doctor) {
    return res.status(404).json({ error: error.message });
  }

  res.status(200).json(doctor);
};

module.exports = {
  getDoctors,
  getDoctor,
};
