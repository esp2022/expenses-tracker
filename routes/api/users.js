const express = require("express");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("jsonwebtoken")
const auth = require("../../middleware/auth");
const User = require('../../models/User');

//Signup Route
userRouter.post("/signup", async (req, res) => {
    try {
        const { email, password, confirmPassword} = req.body;
        if (!email || !passowrd || !username || !confirmPassword) {
            return res.status(400).json({ msg: "Please enter all fields"});
        }
        if (password. length < 6) {
            return res
            .status (400)
            .json({ msg: "Password should be atleast 6 characters" });
        }
        if (confirmPassword != password) {
            return res. status (400).json({ msg: "Both the passwords dont match" });
        }
        const existingUser = await User.findOne({email });
        if (existingUser) {
        return res
        .status (400)
        .json({ msg: "User with the same email already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ email, password: hashedPassword, username });
        
        const savedUser = await newUser.save ();
        console.log(savedUser.username);
        res.json (savedUser);
    }   catch (err) {
        res. status (500).json({ error: err.message });
    }
});
