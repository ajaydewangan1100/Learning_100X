const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(404)
      .send({ messgae: "username and password both required" });
  }

  const existingAdmin = await Admin.findOne({
    username: username,
    password: password,
  });

  if (existingAdmin) {
    return res.status(400).json({ message: "Admin username already exist" });
  }

  const newAdmin = await Admin.create({
    username,
    password,
  });

  if (newAdmin) {
    res.status(200).send({ message: "Admin created successfully" });
  } else {
    res.status(501).send({
      message: "Some error occured while creating admin user, try again",
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

  const admin = await Admin.findOne({ username: username, password: password });

  if (!admin) {
    return res
      .status(404)
      .send({ message: "Admin not fount with given credentials" });
  }

  const token = await jwt.sign(
    { username: username, password: password },
    "secret123"
  );

  res.status(200).json({ message: "Logged in successfully", token: token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
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
  try {
    const courses = await Course.find({});

    res
      .status(200)
      .json({
        message: "Courses fetched successfully",
        numberOfCourses: courses.length,
        courses: courses,
      });
  } catch (error) {
    res.status(500).send({ message: "try again, some error occured" });
  }
});

module.exports = router;
