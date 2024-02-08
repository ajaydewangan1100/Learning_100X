const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ajaydewangan1100:PASSmongodb12345@week3-mongo.do0ge0r.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  email: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  email: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  name: String,
  descriptoin: String,
  price: Number,
  imageLink: String,
  published: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
