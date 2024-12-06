var express = require("express");
var router = express.Router();
const partieController = require("../controllers/partieController");

/* GET users listing. */
router.get("/getAll", partieController.getAll);

/* GET user by id. */
router.get("/getById/:id", partieController.getById);

/* GET user by name. */
router.get("/getByName/:name", partieController.getByName);

/* Update user by id. */
/* Method 1 to patch any new value */

router.patch("/updateUser/:id", partieController.updateById);

/* Update user by id. */
/* Method 2 to put the whole user */

router.patch("/updateUser2/:id", partieController.updateById2);

/* Delete user by id. */
router.delete("/deleteUser/:id", partieController.deletee);

/* Add user. */
router.post("/newpartie/:id1/:id2", partieController.add);

/* Render Twig Partie */
router.get("/partie", (req, res) => {
  res.render("partie");
});

module.exports = router;
