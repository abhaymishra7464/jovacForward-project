const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea");
const validateUser = require("../middleware/isValidUser");

// =====================================
// Dashboard - All Startup Analyses
// GET /api/dashboard
// =====================================

router.get("/", validateUser, async (req, res) => {
  try {
    const ideas = await Idea.find({ user: req.user.id })
      .select("startupTitle startupIdea ideaRating createdAt")
      .sort({ createdAt: -1 });

    const totalIdeas = ideas.length;

    const totalScore = ideas.reduce(
      (sum, idea) => sum + (idea.ideaRating || 0),
      0,
    );

    const averageScore =
      totalIdeas > 0 ? (totalScore / totalIdeas).toFixed(1) : 0;

    return res.status(200).json({
      success: true,
      ideas,
      stats: {
        totalIdeas,
        averageScore,
        reports: totalIdeas,
      },
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

// =====================================
// Single Startup Analysis
// GET /api/dashboard/:id
// =====================================

router.get("/:id", validateUser, async (req, res) => {
  try {
    const idea = await Idea.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found.",
      });
    }

    return res.status(200).json({
      success: true,
      idea,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

module.exports = router;
