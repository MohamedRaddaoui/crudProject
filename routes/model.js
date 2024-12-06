var express = require("express");
var router = express.Router();
const modelController = require("../controllers/modelController");
const modelValidation = require("../middleware/modelValidation");

/* GET users listing. */
router.get("/getAll", modelController.getAll);

/* GET user by id. */
router.get("/getById/:id", modelController.getById);

/* GET user by name. */
router.get("/getByName/:name", modelController.getByName);

/* Update user by id. */
/* Method 1 to patch any new value */

router.patch(
  "/updateUser/:id",
  modelValidation.modelDataValidation,
  modelController.updateById
);

/* Update user by id. */
/* Method 2 to put the whole user */

router.patch(
  "/updateUser2/:id",
  modelValidation.modelDataValidation,
  modelController.updateById2
);

/* Delete user by id. */
router.delete("/deleteUser/:id", modelController.deletee);

/* Add user. */
router.post(
  "/addmodel",
  modelValidation.modelDataValidation,
  modelController.add
);

module.exports = router;
