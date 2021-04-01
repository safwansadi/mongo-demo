const Course = require("./Course.js");

async function getCourse() {
  const courses = await Course.find({
    author: "mosh",
    isPublished: true,
  })
    //author name starts with mosh
    .find({ author: /^mosh/ })
    .limit(10)
    .sort({ name: 1 })
     .select({ name: 1, tags: 1 });
    //.count();
  console.log(courses);
}
getCourse();
