const Partie = require("../models/partie");
const Joueur = require("../models/joueur");

/* GET model listing. */
async function getAll(req, res, next) {
  try {
    const parties = await Partie.find();
    res.status(200).json(parties);
  } catch (error) {
    console.error(error);
  }
}

/* GET Partie by id. */
async function getById(req, res, next) {
  try {
    const partie = await Partie.findById(req.params.id);
    res.status(200).json(partie);
  } catch (error) {
    console.error(error);
  }
}

/* GET Partie by name. */
async function getByName(req, res, next) {
  try {
    const { name } = req.params.name;
    const partie = await Partie.findOne(name);
    res.status(200).json(partie);
  } catch (error) {
    console.error(error);
  }
}

/* Add Partie. */
async function add(req, res, next) {
  try {
    const joueur1 = await Joueur.findById(req.params.id1);
    const joueur2 = await Joueur.findById(req.params.id2);
    const partie = new Partie({
      nom: req.body.nom,
      joueur_1: joueur1._id,
      joueur_2: joueur2._id,
      etat: "en cours",
    });
    await partie.save();
    res.status(200).json(partie);
  } catch (error) {
    console.error(error);
  }
}

/* Update Partie by id. */
/* Method 1 to patch any new value */
async function updateById(req, res, next) {
  try {
    const Partie = await Partie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(Partie);
  } catch (error) {
    console.error(error);
  }
}

/* Update Partie by id. */
/* Method 2 to put the whole Partie */
async function updateById2(req, res, next) {
  try {
    const Partie = await Partie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(Partie);
  } catch (error) {
    console.error(error);
  }
}

/* Delete Partie by id. */
async function deletee(req, res, next) {
  try {
    await Partie.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json("Successfully Deleted");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAll,
  getById,
  getByName,
  updateById,
  updateById2,
  deletee,
  add,
};
