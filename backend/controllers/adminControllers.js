const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const { default: mongoose } = require("mongoose");

// const allUsers = async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { lName: { $regex: req.query.search, $options: "i" } },
//           { fName: { $regex: req.query.search, $options: "i" } },
//           { email: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

//   res.send(users);
// };

//get all Users
const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

//get all Doctors
const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({ status: "pending" });

  res.status(200).json(doctors);
};

//approve doctor
const approveDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const approvedDoctor = await Doctor.findOne({ _id: id });
  const approvedUser = await User.findOne({ _id: approvedDoctor.userId });

  const unseenNotifications = approvedUser.unseenNotifications;
  unseenNotifications.push({
    type: "doctor request approved",
    message: "Your doctor account was approved",
    onClickPath: "/doctor",
  });

  await Doctor.findByIdAndUpdate(id, { status: "approved" });

  await User.findByIdAndUpdate(approvedUser._id, { isDoctor: true, unseenNotifications });

  if (!approvedDoctor) {
    return res.status(404).json({ error: "No such User" });
  }

  res.status(200).json(approvedDoctor);
};

//declineDoctor
const declineDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const declinedDoctor = await Doctor.findOne({ _id: id });
  const declinedUser = await User.findOne({ _id: declinedDoctor.userId });

  const unseenNotifications = declinedUser.unseenNotifications;
  unseenNotifications.push({
    type: "doctor request declined",
    message: "Your doctor account was declined",
    onClickPath: "/doctor",
  });

  await Doctor.findByIdAndUpdate(id, { status: "declined" });

  await User.findByIdAndUpdate(declinedUser._id, { unseenNotifications });

  if (!declinedDoctor) {
    return res.status(404).json({ error: "No such User" });
  }

  res.status(200).json(declinedDoctor);
};

module.exports = {
  getUsers,
  getDoctors,
  approveDoctor,
  declineDoctor,
  //   updateDoctor,
};
