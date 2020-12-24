const router = require('express').Router();
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
require('dotenv').config();

// Login Route - Creates a session
let loginFailedCounter = 0;

router.post('/users/login', (req, res) => {
  let lowCaseUName = req.body.username.toLowerCase()
  User.authenticate()(lowCaseUName, req.body.password, (err, user) => {
    if (err) res.json(err)
    if (!user && loginFailedCounter < 3) {
      loginFailedCounter++;
      res.json({ name: "LoginFailedError", message: "Login failed, please try again.", isLoggedIn: false })
    }
    if (!user && loginFailedCounter >= 3) {
      loginFailedCounter++;
      res.json({ name: "MultipleFailedError", message: "Login failed, please reset your password.", isLoggedIn: false })
    }
    if (user) {
      loginFailedCounter = 0;
      res.json({
        isLoggedIn: !!user,
        user: user,
        token: jwt.sign({ id: user._id }, process.env.SECRET)
      })
    }
  })
})

//  Registration Route
router.post('/users/register', (req, res) => {
  let lowCaseUName = req.body.username.toLowerCase()

  if (req.body.password !== req.body.confirm) {
    res.json({ name: "PasswordsMatchError", message: 'Passwords do not match.' })
  } else {
    User.register(new User({
      isAdmin: false,
      username: lowCaseUName,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      address: {
        line1: req.body.address.line1,
        line2: req.body.address.line2,
        country: req.body.address.country,
        city: req.body.address.city,
        postal_code: req.body.address.postal_code,
        state: req.body.address.state
      }
    }), req.body.password, err => {
      if (err.errmsg && err.errmsg.includes('email')) {
        // if we want to display the email they tried to sign up with
        // let dupEmail = err.errmsg.substring(err.errmsg.indexOf('\"') + 1, err.errmsg.lastIndexOf('\"'))
        res.json({ name: 'EmailExistsError', message: `A user with the given email is already registered.` })
      }
      else if (err.message) {
        res.json(err)
      }
      else {
        res.sendStatus(200)
      }
    })
  }
})

module.exports = router