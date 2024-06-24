const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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

//   try {
//     const search = req.query.search;

//     // Validate the search parameter
//     if (!search) {
//       return res.status(400).json({ message: "Search query is required" });
//     }

//     // Perform search operation (this is just an example, modify as per your database and schema)
//     const users = await User.find({
//       $or: [
//         { name: { $regex: search, $options: "i" } }, // Case insensitive search on 'name'
//         { email: { $regex: search, $options: "i" } }, // Case insensitive search on 'email'
//       ],
//     });

//     // Respond with the search results
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2h" });
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
      // pic: user.pic,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { fName, lName, email, password } = req.body;

  try {
    const user = await User.signup(fName, lName, email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      isAdmin: user.isAdmin,
      isDoctor: user.isDoctor,
      // pic: user.pic,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser, allUsers };
