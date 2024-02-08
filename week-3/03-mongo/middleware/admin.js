const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  const admin = Admin.findOne({ username });

  if (admin && admin.password === password) {
    next();
  }
}

module.exports = adminMiddleware;
