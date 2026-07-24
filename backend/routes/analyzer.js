const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea");
const isValidUser = require("../middleware/isValidUser");

const startupAnalysisPrompt = require("../prompt/prompt");
const ai = require("../config/gemini");

router.post("/analyseIdea", isValidUser, async (req, res) => {

    try {

        const { startupIdea } = req.body;

        if (!startupIdea || startupIdea.trim() === "") {

            return res.status(400).json({
                success: false,
                msg: "Startup Idea is required"
            });

        }

        const prompt = startupAnalysisPrompt(startupIdea);

        const response = await ai.models.generateContent({

            model: "gemini-2.5-flash-lite",
            contents: prompt

        });

        const text = response.text;

        const cleanedResponse = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const analysis = JSON.parse(cleanedResponse);

        const savedIdea = await Idea.create({

            user: req.user._id,

            startupIdea,

            startupTitle: analysis.startupTitle,

            summary: analysis.summary,

            problemStatement: analysis.problemStatement,

            solution: analysis.solution,

            targetAudience: analysis.targetAudience,

            swot: analysis.swot,

            marketSize: analysis.marketSize,

            competitors: analysis.competitors,

            businessModel: analysis.businessModel,

            ideaRating: analysis.ideaRating,

            risks: analysis.risks,

            suggestions: analysis.suggestions,

            finalVerdict: analysis.finalVerdict

        });

        res.status(200).json({

            success: true,

            msg: "Idea Analysed Successfully",

            data: savedIdea

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            msg: "Something went wrong while analysing idea"

        });

    }

});

module.exports = router;