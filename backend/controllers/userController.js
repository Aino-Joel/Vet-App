const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorModel");

const allUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { lName: { $regex: req.query.search, $options: "i" } },
          { fName: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

  res.send(users);
};

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      isAdmin: user.isAdmin,
      isDoctor: user.isDoctor,
      pic: user.pic,
      unseenNotifications: user.unseenNotifications,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { fName, lName, email, password, pic } = req.body;

  try {
    const user = await User.signup(fName, lName, email, password, pic);

    //create token
    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      isAdmin: user.isAdmin,
      isDoctor: user.isDoctor,
      pic: user.pic,
      unseenNotifications: user.unseenNotifications,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//apply doctor
const applyDoctor = async (req, res) => {
  try {
    
    const newDoctor = new Doctor({ ...req.body, status: "pending" });
    await newDoctor.save();
    const adminUser = await User.findOne({ isAdmin: true });

    const unseenNotifications = adminUser.unseenNotifications;
    unseenNotifications.push({
      type: "new doctor request",
      message: `${newDoctor.fName} ${newDoctor.lName} has applied for doctor account`,
      data: {
        doctorId: newDoctor._id,
        name: newDoctor.fName + " " + newDoctor.lName,
      },
      onClickPath: "/doctors",
    });
    await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });
    res.status(200).json("Success")
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser, allUsers, applyDoctor };
