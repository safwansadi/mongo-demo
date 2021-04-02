const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")

  .then(() => console.log("connected to MongoDB...."))
  .catch((err) => console.log("could not connect to DB", err));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v, callback) {
        //custom validator
        setTimeout(() => {
          const result = v && v.length > 0;
          callback(result);
        }, 4000);
      },
      message: "A course should have at least one tag",
    },
  },
  catagory: {
    type: String,
    enum: ["web", "mobile", "network"],
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
