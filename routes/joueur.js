var express = require("express");
var router = express.Router();
const joueurController = require("../controllers/joueurController");
const modelValidation = require("../middleware/modelValidation");

/* GET users listing. */
router.get("/getalljoueur", joueurController.getAll);

/* GET user by id. */
router.get("/getjoueur/:id", joueurController.getById);

/* GET user by name. */
router.get("/getByName/:name", joueurController.getByName);

/* Update user by id. */
/* Method 1 to patch any new value */

router.patch(
  "/updateUser/:id",
  modelValidation.modelDataValidation,
  joueurController.updateById
);

/* Update user by id. */
/* Method 2 to put the whole user */

router.patch("/attaque/:id1/:id2", joueurController.attaque);

/* Delete user by id. */
router.delete("/deleteJoueur/:id", joueurController.deleteJoueur);

/* Add user. */
router.post("/newjoueur", joueurController.add);

module.exports = router;
