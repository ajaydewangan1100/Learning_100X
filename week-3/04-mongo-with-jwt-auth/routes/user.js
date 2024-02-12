const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

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

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
