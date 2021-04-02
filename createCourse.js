const Course = require("./Course");

async function createCourse() {
  const course = new Course({
    name: "Angular.js Course",
    author: "mosh",
    tags: null,
    isPublished: true,
    catagory: "web",
    price: 10,
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message);
  }
}

createCourse();
