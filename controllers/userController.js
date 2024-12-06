const User = require("../models/user");

/* Chat users listing. */
async function chat(req, res, next) {
  res.render("chat");
}
/* GET users listing. */
async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
}

/* GET user by id. */
async function getUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

/* GET user by name. */
async function getUserByName(req, res, next) {
  try {
    const { name } = req.params.name;
    const user = await User.findOne(name);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

/* Add user. */
/* METHOD 1 Bad*/
async function addUserFromUrl(req, res, next) {
  try {
    await new User({
      name: req.params.name,
      email: req.params.email,
      cin: req.params.cin,
    }).save();
    res.status(200).json("User Added Successfully");
  } catch (error) {
    console.error(error);
  }
}

/* METHOD 2 Good*/
async function addUser(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json("User Added Successfully");
  } catch (error) {
    console.error(error);
  }
}

/* Update user by id. */
/* Method 1 to patch any new value */
async function updateUserById(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

/* Update user by id. */
/* Method 2 to put the whole user */
async function updateUserById2(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

/* Delete user by id. */
async function deleteUser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json("User Successfully Deleted");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  updateUserById,
  updateUserById2,
  deleteUser,
  addUserFromUrl,
  addUser,
  chat,
};
