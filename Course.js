const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")

  .then(() => console.log("connected to MongoDB...."))
  .catch((err) => console.log("could not connect to DB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);


module.exports = Course;