
const express=require("express");
//image
const multer = require("multer");
const path = require("path");
//validation
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/validations/validateMw");
const validateTeacher = require("./../Core/validations/teacherValidator");
// authorization
const authorization = require("./../Core/auth/authenticationMW");
//controllers
const controller=require("../Controllers/teacherController");
//route
const router=express.Router();


router.route("/teacher")
.all(authorization.checkAdminOrTeacher)
.get(validateMW,controller.getAllTeacher)
.post(multer({
    storage: multer.diskStorage({
        destination:(request , file , callback)=>{
            callback(null, path.join(__dirname,"..","images"))
        },
        // filename:(request , file , callback)=>{

        // })
    })

}).single("image"),
    validateTeacher.addTeacherValidator,validateMW,controller.addTeacher)
.put(validateTeacher.updateTeacherValidator,validateMW,controller.updateTeacher)
.delete(validateTeacher.deleteTeacherValidator,validateMW,controller.deleteTeacher);


module.exports=router;









