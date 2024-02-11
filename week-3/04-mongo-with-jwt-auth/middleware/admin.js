const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(404).send({ messgae: "Bearer token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = await jwt.verify(token, "secret123");

    const existingAdmin = await Admin.findOne({
      username: decoded.username,
      password: decoded.password,
    });
    if (existingAdmin) {
      next();
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = adminMiddleware;
