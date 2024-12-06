const mongoose = require("mongoose");

const joueurSchema = mongoose.Schema({
  pseudo: String,
  sante: Number,
  score: Number,
});
module.exports = mongoose.model("joueur", joueurSchema);
