var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const userValidation = require("../middleware/userValidation");

/* Chat users listing. */
router.get("/chat", userController.chat);
/* GET users listing. */
router.get("/getAll", userController.getAllUsers);

/* GET user by id. */
router.get("/getById/:id", userController.getUserById);

/* GET user by name. */
router.get("/getByName/:name", userController.getUserByName);

/* Update user by id. */
/* Method 1 to patch any new value */

router.patch(
  "/updateUser/:id",
  userValidation.userDataValidation,
  userController.updateUserById
);

/* Update user by id. */
/* Method 2 to put the whole user */

router.patch(
  "/updateUser/:id",
  userValidation.userDataValidation,
  userController.updateUserById2
);

/* Delete user by id. */
router.delete("/deleteUser/:id", userController.deleteUser);

/* Add user. */
/* METHOD 1 Bad*/
router.get("/adduser/:name/:email/:cin", userController.addUserFromUrl);
/* METHOD 2 Good*/
router.post(
  "/adduser",
  userValidation.userDataValidation,
  userController.addUser
);

module.exports = router;
