const {body } = require("express-validator")
module.exports.addTeacherValidator=
[
    body("id").isInt().withMessage("Teacher Id should be integer"),
    body("fullName").isAlpha().withMessage("Teacher Name should be string").isLength({max:10}).withMessage("department name <10"),
    body("password").isAlpha()
    // .isStrongPassword({
    //     minLength: 8,
    //     minLowercase: 1,
    //     minUppercase: 1,
    //     minNumbers: 1,
    //     minSymbols: 1,
    //     returnScore: false,
    //     pointsPerUnique: 1,
    //     pointsPerRepeat: 0.5,
    //     pointsForContainingLower: 10,
    //     pointsForContainingUpper: 10,
    //     pointsForContainingNumber: 10,
    //     pointsForContainingSymbol: 10,
    //   })
      .withMessage("Teacher Password should be Strong"),
      body("email").isEmail().withMessage("Teacher Password should be Strong"),
      // body("image").isString().withMessage("Teacher image should be string"),

];


module.exports.updateTeacherValidator=
[
    body("id").optional().isInt().withMessage("Teacher Id should be integer"),
    body("fullName").optional().isAlpha().withMessage("Teacher Name should be string").isLength({max:10}).withMessage("department name <10"),
    body("password").optional().isAlpha()
    // .isStrongPassword({
    //     minLength: 8,
    //     minLowercase: 1,
    //     minUppercase: 1,
    //     minNumbers: 1,
    //     minSymbols: 1,
    //     returnScore: false,
    //     pointsPerUnique: 1,
    //     pointsPerRepeat: 0.5,
    //     pointsForContainingLower: 10,
    //     pointsForContainingUpper: 10,
    //     pointsForContainingNumber: 10,
    //     pointsForContainingSymbol: 10,
    //   })
      .withMessage("Teacher Password should be Strong"),
      body("email").optional().isEmail().withMessage("Teacher email should be @"),
      body("image").optional().isString().withMessage("Teacher image should be string"),
];

module.exports.deleteTeacherValidator=
[
    body("id").isInt().withMessage("Teacher Id should be integer"),

];

// id
// fullName
// password
// email
// image