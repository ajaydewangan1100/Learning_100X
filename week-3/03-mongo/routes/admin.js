const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (username && password) {
    let existingAdmin = await Admin.findOne({ email: username });
    if (existingAdmin) {
      return res.status(404).send("Username already exist");
    }
    const newAdmin = await Admin.create({
      username: username,
      password: password,
    });
    if (newAdmin) {
      res.status(200).send({ message: "Admin created successfully" });
    } else {
      res.status(501).send({
        message: "Some error occured while creating admin user, try again",
      });
    }
  } else {
    res.status(400).send({ message: "Username and password both required" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;

    if (!title || !description || !price || !imageLink) {
      return res.status(404).send({ message: "All fields required" });
    }

    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
    });

    res.json({
      courseId: newCourse._id,
      message: "Course created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: "Course not created, try again" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const res = await Course.find({});

  if (res) {
    res.json({ courses: res });
  } else {
    res.status(500).send({ message: "Some error occured, try again" });
  }
});

module.exports = router;
