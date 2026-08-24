const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea");
const isValidUser = require("../middleware/isValidUser");

const startupAnalysisPrompt = require("../prompt/prompt");
const ai = require("../config/gemini");

// =====================================
// Fallback Analysis
// Used when Gemini is unavailable/quota exceeded
// =====================================

const createFallbackAnalysis = (startupIdea) => {
  const idea = startupIdea.trim();

  return {
    startupTitle: "Startup Idea Analysis",

    summary:
      "This startup idea addresses a specific problem and proposes a solution for its target users.",

    problemStatement:
      "The startup aims to solve the problem described by the founder.",

    solution:
      "The proposed solution focuses on providing a practical and scalable way to address the identified problem.",

    targetAudience: [
      "Potential customers affected by the problem",
      "Early adopters",
      "Technology-oriented users",
    ],

    swot: {
      strengths: [
        "Addresses a real-world problem",
        "Potential for digital scalability",
        "Clear opportunity for customer validation",
      ],
      weaknesses: [
        "Requires market validation",
        "Customer acquisition may take time",
        "Competition needs to be evaluated",
      ],
      opportunities: [
        "Growing digital adoption",
        "Potential to expand into related markets",
        "Partnership and investment opportunities",
      ],
      threats: [
        "Existing competitors",
        "Changing customer preferences",
        "Market and technology changes",
      ],
    },

    marketSize: {
      tam: "Large potential market depending on industry and geography",
      sam: "Reachable segment of the target market",
      som: "Initial obtainable market through focused customer acquisition",
    },

    competitors: [
      {
        name: "Existing industry solutions",
        strength: "Established customer base and market presence",
      },
    ],

    businessModel: ["Subscription", "Freemium", "Commission-based revenue"],

    ideaRating: 7,

    risks: [
      "Insufficient market demand",
      "Strong competition",
      "Difficulty acquiring initial customers",
    ],

    suggestions: [
      "Validate the idea with real potential customers",
      "Build an MVP before large-scale development",
      "Study existing competitors",
      "Define a clear revenue model",
      "Measure customer feedback and retention",
    ],

    finalVerdict:
      "The idea has potential, but market validation and competitor research should be completed before significant investment.",
  };
};

// =====================================
// Analyze Startup Idea
// POST /api/analyzer/analyzeIdea
// =====================================

router.post("/analyzeIdea", isValidUser, async (req, res) => {
  try {
    const { startupIdea } = req.body;

    if (!startupIdea || startupIdea.trim() === "") {
      return res.status(400).json({
        success: false,
        msg: "Startup Idea is required",
      });
    }

    let analysis;
    let usedFallback = false;

    // =====================================
    // TRY GEMINI
    // =====================================

    try {
      const prompt = startupAnalysisPrompt(startupIdea);

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      const text =
        typeof response.text === "function" ? response.text() : response.text;

      if (!text) {
        throw new Error("Empty response received from Gemini");
      }

      let cleanedResponse = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      // If Gemini adds extra text around JSON,
      // extract only the JSON object.
      const firstBrace = cleanedResponse.indexOf("{");
      const lastBrace = cleanedResponse.lastIndexOf("}");

      if (firstBrace !== -1 && lastBrace !== -1) {
        cleanedResponse = cleanedResponse.substring(firstBrace, lastBrace + 1);
      }

      analysis = JSON.parse(cleanedResponse);

      console.log("✅ Gemini analysis generated successfully");
    } catch (aiError) {
      console.log("⚠️ Gemini unavailable:", aiError.message);

      // Gemini quota / 503 / parsing failure
      // should NOT break the project.
      analysis = createFallbackAnalysis(startupIdea);
      usedFallback = true;

      console.log("⚠️ Using fallback analysis");
    }

    // =====================================
    // SAVE RESULT TO MONGODB
    // =====================================

    const savedIdea = await Idea.create({
      user: req.user._id || req.user.id,

      startupIdea,

      startupTitle: analysis.startupTitle || "Startup Idea Analysis",

      summary: analysis.summary || "",

      problemStatement: analysis.problemStatement || "",

      solution: analysis.solution || "",

      targetAudience: Array.isArray(analysis.targetAudience)
        ? analysis.targetAudience
        : [],

      swot: {
        strengths: Array.isArray(analysis.swot?.strengths)
          ? analysis.swot.strengths
          : [],

        weaknesses: Array.isArray(analysis.swot?.weaknesses)
          ? analysis.swot.weaknesses
          : [],

        opportunities: Array.isArray(analysis.swot?.opportunities)
          ? analysis.swot.opportunities
          : [],

        threats: Array.isArray(analysis.swot?.threats)
          ? analysis.swot.threats
          : [],
      },

      marketSize: {
        tam: analysis.marketSize?.tam || "",
        sam: analysis.marketSize?.sam || "",
        som: analysis.marketSize?.som || "",
      },

      competitors: Array.isArray(analysis.competitors)
        ? analysis.competitors
        : [],

      businessModel: Array.isArray(analysis.businessModel)
        ? analysis.businessModel
        : [],

      ideaRating: Number(analysis.ideaRating) || 0,

      risks: Array.isArray(analysis.risks) ? analysis.risks : [],

      suggestions: Array.isArray(analysis.suggestions)
        ? analysis.suggestions
        : [],

      finalVerdict: analysis.finalVerdict || "",
    });

    // =====================================
    // SEND RESPONSE
    // =====================================

    return res.status(200).json({
      success: true,

      msg: usedFallback
        ? "Idea analysed successfully"
        : "Idea analysed successfully using AI",

      usedFallback,

      data: savedIdea,
    });
  } catch (err) {
    console.log("Analyzer Error:", err);

    return res.status(500).json({
      success: false,
      msg: "Unable to analyse startup idea",
      error: err.message,
    });
  }
});

module.exports = router;
