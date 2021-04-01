    //ne(not equal)

//gt (greater than)\
//gte (greater than or equal)
//lt(less than)
//lte (less than or equal)
//in
//nin(not in)

    // .find({ price: { $gte: 10, $lte: 20 } })

    // .find({ price: { $in:[10,15,20] } })

// .find()
//.or([{ author: "Mosh" }, { isPublished: true }])
//.and([])

    //starts with mosh
    .find({ author: /^Mosh/ })

    //ends with mosh
    //  .find({ author: /Hammedani$/i }) //i is for case insensetive

    //contains mosh
    // .find({ author: /.*Mosh.*/ })
    //eq(equal)
