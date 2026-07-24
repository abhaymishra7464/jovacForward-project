const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea");
const validateUser = require("../middlewares/validateUser");




router.get("/", validateUser, async (req, res) => {

    try {

        const ideas = await Idea.find({ user: req.user.id })
            .select("startupTitle startupIdea ideaRating createdAt")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            ideas
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });

    }

});



// =====================================
// Single Startup Analysis
// GET /dashboard/:id
// =====================================

router.get("/:id", validateUser, async (req, res) => {

    try {

        const idea = await Idea.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!idea) {

            return res.status(404).json({
                success: false,
                message: "Analysis not found."
            });

        }

        return res.status(200).json({
            success: true,
            idea
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });

    }

});



module.exports = router;