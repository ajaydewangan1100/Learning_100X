async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  const user = await User.findOne({ email: username, password: password });

  if (user) {
    next();
  } else {
    return res.status(403).send({ message: "User doesn't exist" });
  }
}

module.exports = userMiddleware;
