const Joueur = require("../models/joueur");

/* GET model listing. */
async function getAll(req, res, next) {
  try {
    const Joueurs = await Joueur.find();
    res.status(200).json(Joueurs);
  } catch (error) {
    console.error(error);
  }
}

/* GET Joueur by id. */
async function getById(req, res, next) {
  try {
    const joueur = await Joueur.findById(req.params.id);
    res.status(200).json(joueur);
  } catch (error) {
    console.error(error);
  }
}

/* GET Joueur by name. */
async function getByName(req, res, next) {
  try {
    const { name } = req.params.name;
    const Joueur = await Joueur.findOne(name);
    res.status(200).json(Joueur);
  } catch (error) {
    console.error(error);
  }
}

/* Add Joueur. */
async function add(req, res, next) {
  try {
    const joueur = new Joueur({
      ...req.body,
      sante: 100,
      score: 0,
    });
    await joueur.save();
    res.status(200).json("Added Successfully");
  } catch (error) {
    console.error(error);
  }
}

/* Update Joueur by id. */
/* Method 1 to patch any new value */
async function updateById(req, res, next) {
  try {
    const Joueur = await Joueur.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(Joueur);
  } catch (error) {
    console.error(error);
  }
}

/* Update Joueur by id. */
/* Method 2 to put the whole Joueur */
async function updateById2(req, res, next) {
  try {
    const Joueur = await Joueur.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(Joueur);
  } catch (error) {
    console.error(error);
  }
}

/* Delete Joueur by id. */
async function deleteJoueur(req, res, next) {
  try {
    await Joueur.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json("Successfully Deleted");
  } catch (error) {
    console.error(error);
  }
}

/* GET Joueur stats. */
async function getStats(id1, id2) {
  try {
    joueur1 = await Joueur.findById(id1);
    joueur2 = await Joueur.findById(id2);
    result = {
      joueur1: joueur1,
      joueur2: joueur2,
    };
    return result;
  } catch (error) {
    console.error(error);
  }
}

/* Attack Joueur. */
async function attaque(req, res, next) {
  try {
    joueur1 = await Joueur.findById(req.params.id1);
    joueur2 = await Joueur.findById(req.params.id2);

    j1 = {
      pseudo: joueur1.pseudo,
      score: joueur1.score + 10,
      sante: joueur1.sante,
    };
    j2 = {
      pseudo: joueur2.pseudo,
      score: joueur2.score,
      sante: joueur2.sante - 10,
    };
    joueur1 = await Joueur.findByIdAndUpdate(req.params.id1, j1, {
      new: true,
    });
    joueur2 = await Joueur.findByIdAndUpdate(req.params.id2, j2, {
      new: true,
    });

    res.status(200).json({
      joueur1,
      joueur2,
    });
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
  deleteJoueur,
  add,
  attaque,
  getStats,
};
