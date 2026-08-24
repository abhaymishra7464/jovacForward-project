const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isValidUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "Please Login",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err);

    return res.status(401).json({
      success: false,
      msg: "Invalid Token",
    });
  }
};

module.exports = isValidUser;
