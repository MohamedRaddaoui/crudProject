const User = require("../models/user");

/* GET model listing. */
async function getAll(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
}

/* GET user by id. */
async function getById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

/* GET user by name. */
async function getByName(req, res, next) {
  try {
    const { name } = req.params.name;
    const user = await User.findOne(name);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

/* Add user. */
async function add(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json("Added Successfully");
  } catch (error) {
    console.error(error);
  }
}

/* Update user by id. */
/* Method 1 to patch any new value */
async function updateById(req, res, next) {
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
async function updateById2(req, res, next) {
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
async function deletee(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id, req.body);
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
