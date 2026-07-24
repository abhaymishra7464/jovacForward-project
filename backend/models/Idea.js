const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    startupIdea:{
        type:String,
        required:true
    },

    startupTitle:String,

    summary:String,

    problemStatement:String,

    solution:String,

    targetAudience:[String],

    swot:{
        strengths:[String],
        weaknesses:[String],
        opportunities:[String],
        threats:[String]
    },

    marketSize:{
        tam:String,
        sam:String,
        som:String
    },

    competitors:[
        {
            name:String,
            strength:String
        }
    ],

    businessModel:[String],

    ideaRating:Number,

    risks:[String],

    suggestions:[String],

    finalVerdict:String

},{timestamps:true});

const Idea = mongoose.model('Idea',ideaSchema);

module.exports = Idea;