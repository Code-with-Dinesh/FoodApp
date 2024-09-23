const express = require("express")
const route = express.Router()
const bcrypt =  require("bcrypt")
const jwt = require('jsonwebtoken');
const {user,checkuserSchema} = require("../Modals/user")
module.exports = route.post('/create', async function (req, res) {
  try {
    const { name, email, password } = req.body;

    // Validate the incoming data
    const { error } = checkuserSchema({ name, email, password });
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    // Check if the email is already registered
    let checkUser = await user.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ success: false, message: 'Email is already registered' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await user.create({ name, email, password: hashedPassword });
    const token = jwt.sign(
      { email, userId: newUser._id },
      'mysecret',
      { expiresIn: '1h' }
    );

    // Set the token in a cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use 'secure' flag in production
    });

    // Send a success response
    res.status(201).json({ success: true, token });

  } catch (err) {
    console.error('Error during user creation:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


//login functality
module.exports = route.post('/loginuser', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // Fetch the user by email
    const userdata = await user.findOne({ email });
    
    if (!userdata) {
      return res.status(400).json({ success: false, message: 'Email does not exist' });
    }

    // Compare passwords using bcrypt
    bcrypt.compare(password, userdata.password, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error comparing passwords' });
      }
      
      if (result) {
        // Generate JWT token
        const token = jwt.sign({ email: email, userid: userdata._id }, 'mysecret');
        res.cookie("token", token);

        // Send successful response
        const data = {
          user: {
            id: userdata._id,
            email: userdata.email,
          },
          token:token
        };

        return res.status(200).json({ success: true, message: data });
      } else {
        // Password didn't match
        return res.status(400).json({ success: false, message: 'Incorrect password' });
      }
    });

  } catch (error) {
    console.error('Error in /loginuser route:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


