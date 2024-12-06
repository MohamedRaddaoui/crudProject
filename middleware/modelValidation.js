const yup = require("yup");

async function modelDataValidation(req, res, next) {
  try {
    const schema = yup.object().shape({
      name: yup.string().required(),
      //Start with uppercase / name: yup.string().matches(/^[A-Z]/).required(),
      email: yup.string().email().matches(".*@esprit.tn").required(),
      //Same One : email: yup.string().email().matches(/@esprit.tn/).required(),
      cin: yup.string().required(),
    });
    await schema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { modelDataValidation };
