const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    seenNotifications: {
      type: Array,
      default: [],
    },
    unseenNotifications: {
      type: Array,
      default: [],
    },
    pic: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

//static signup method
userSchema.statics.signup = async function (fName, lName, email, password, pic) {
  //validation
  if (!fName || !lName || !email || !password || !pic) {
    throw Error("All fields should be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Passsword is not strong enough");
  }

  //check if email exists
  const existsEmail = await this.findOne({ email });

  if (existsEmail) {
    throw Error("Email already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  //create user
  const user = await this.create({
    fName,
    lName,
    email,
    password: hash,
    pic
  });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields should be filled");
  }

  var user = null;

  //validation
  if (validator.isEmail(email)) {
    user = await this.findOne({ email: email });
  }

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User
