const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  if (username && password) {
    let existingUser = await User.findOne({ email: username });
    if (existingUser) {
      return res.status(404).send("Username already exists");
    }

    const newUser = await User.create({
      email: username,
      password: password,
    });
    if (newUser) {
      res.status(200).send({ message: "User created successfully" });
    } else {
      res.status(500).send({
        message: "Some error occured while creating User account, try again",
      });
    }
  } else {
    res.status(400).send({ message: "Username and password both required" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const res = await Course.find({});

  if (res) {
    res.json({ courses: res });
  } else {
    res.status(500).send({ message: "Some error occured, try again" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseId = req.params.courseId;

  try {
    await Course.updateOne(
      { username: username },
      {
        $push: { purchasedCourse: courseId },
      }
    );

    res.json({ message: "Course purchased successfully" });
  } catch (err) {
    res.status(500).json({ message: "Try again, some error occured" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({ email: req.headers.username });

    const course = await Course.find({ _id: {"$in": user.purchasedCourses} });

    res.status(200).json({
      message: "Purchased courses list",
      courses: course,
    });
  } catch (error) {
    res.status(500).json({ message: "Some error occured" });
  }
});

module.exports = router;
