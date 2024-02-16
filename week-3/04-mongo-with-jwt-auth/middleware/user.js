const { User } = require("../db");
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(404).send({ messgae: "Bearer token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = await jwt.verify(token, "secret123");

    const existingUser = await User.findOne({
      username: decoded.username,
      password: decoded.password,
    });
    if (existingUser) {
      req.userDetails = existingUser;
      next();
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = userMiddleware;
