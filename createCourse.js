const Course = require("./Course");

async function createCourse() {
  const course = new Course({
    name: "Angular.js Course",
    author: "mosh",
    tags: ["node", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}
createCourse();
