const express=require("express");
//validation
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/validations/validateMw");
const validateClasses = require("./../Core/validations/classesValidator");
// authorization
const authorization = require("./../Core/auth/authenticationMW");
//controllers
const controller=require("../Controllers/classController");
//route
const router=express.Router();


router.route("/class")
.all(authorization.checkAdmin)
.get(validateClasses.getClass,validateMW,controller.getAllClass)
.post(validateClasses.addClass,validateMW,controller.addClass)
.put(validateClasses.updateClass,validateMW,controller.updateClass)
.delete(validateClasses.deleteClass,validateMW,controller.deleteClass);

//to get children in class
router.get("/classchildern/:id",validateClasses.getChildren,validateMW,controller.getClassOfChildren)
//to get teacher in class
router.get("/classteacher/:id",validateClasses.getTeacher,validateMW,controller.getClassOfTeachers)


module.exports=router;







