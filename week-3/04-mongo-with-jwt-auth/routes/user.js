const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(404)
      .send({ messgae: "username and password both required" });
  }

  try {
    const existingUser = await User.findOne({
      username: username,
    });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exist" });
    }

    const newUser = await User.create({
      username,
      password,
    });

    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    res.status(501).send({
      message: "Some error occured while creating user, try again",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(404)
      .send({ messgae: "username and password both required" });
  }

  try {
    const user = await User.findOne({ username: username, password: password });

    if (!user) {
      return res
        .status(404)
        .send({ message: "User not fount with given credentials" });
    }

    const token = await jwt.sign(
      { username: username, password: password },
      "secret123"
    );

    if (token) {
      res.status(200).json({ message: "Logged in successfully", token: token });
    }
  } catch (error) {
    return res.status(500).send({ message: "Some error occured, try again" });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  res.send({ message: "yess" });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
