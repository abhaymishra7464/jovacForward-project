const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");



router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                msg: "All fields are required"
            });
        }

       
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "User already exists"
            });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            msg: "User Registered Successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });

    }

});




router.post("/login", async (req, res) => {

    try {

        let { email, password } = req.body;

        email = email.trim();
        password = password.trim();

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                msg: "Email and Password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        }

    
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                msg: "Invalid Credentials"
            });
        }

        
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });w

        res.status(200).json({

            success:true,
            msg:"Login Successful",

            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });

    }

});

router.get("/logout",(req,res)=>{

    res.clearCookie("token",{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    });

    res.json({

        success:true,
        msg:"Logout Successful"

    });

});

module.exports = router;