const Course = require("./Course");

async function removeCourse(id) {
  // const result = await Course.deleteMany({ _id: id });
  const result = await Course.findByIdAndRemove(id); //this approach will show what is deleted
  console.log(result);
}
removeCourse("6065ed5de38afe36f0f6edc8");
