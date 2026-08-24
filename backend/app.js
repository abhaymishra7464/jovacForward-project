const express = require("express");
const app = express();
require("dotenv").config();

const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));

const connectDb = require("./config/connectDb");
connectDb();

const dashBoardRoutes = require("./routes/dashboard");
app.use("/api/dashboard", dashBoardRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const analyzerRoutes = require("./routes/analyzer");
app.use("/api/analyzer", analyzerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});