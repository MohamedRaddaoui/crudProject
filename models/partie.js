const mongoose = require("mongoose");

const partieSchema = mongoose.Schema({
  nom: String,

  joueur_1: String,

  joueur_2: String,

  etat: String,
});
module.exports = mongoose.model("partie", partieSchema);
