const Course = require("./Course");

async function updateCourse(id) {
  const result = await Course.update(
    { _id: id },
    {
      $set: {
        author: "jack",
        isPublished: false,
      },
    }
  );
  console.log(result);
}
updateCourse("6062b92b153a392a20806f41");
