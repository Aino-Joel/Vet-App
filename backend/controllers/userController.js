const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2h' })
 }

//login user
const loginUser = async(req, res) => {
    const {username, password} = req.body

    try{
        const user = await User.login(username, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }

}

//signup user
const signupUser = async(req, res) => {
    const { fName, lName, email, password} = req.body

    try{
        const user = await User.signup(fName, lName, email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }