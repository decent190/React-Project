const studentModel = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const signup = (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const users = new studentModel({ firstName, lastName, email, password })
  users.save()
    .then(() => res.status(200).send({ message: "Signup successful" }))
    .catch((err) => res.status(500).send({ message: "Signup failed", error: err }))
}

const login = (req, res) => {
  const { email, password } = req.body
  studentModel.findOne({ email })
    .then((result) => {
      if (!result) {
        return res.status(404).send({ message: "User not found" })
      }
      bcrypt.compare(password, result.password)
        .then((goodTogo) => {
          if (goodTogo) {
            let token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "1h" })
            res.send({ message: `Welcome ${result.firstName}`, status: 200, token })
          } else {
            res.status(401).send({ message: "Invalid credentials" })
          }
        })
    })
    .catch((err) => res.status(500).send({ message: "Signin failed", error: err }))
}

module.exports = { signup, login }