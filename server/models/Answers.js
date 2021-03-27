const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  numberOfCorrectAnswers: { type: Number, required: true },
  numberOfIncorrectAnswers: { type: Number, required: true },
  numberOfQuestions: { type: Number, required: true },
  correctPoints: { type: Number, required: true },
  totalPoints: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Answers", schema);
