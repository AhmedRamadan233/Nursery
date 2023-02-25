
const express=require("express");
//validation
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/validations/validateMw");
const validateChildren = require("./../Core/validations/childrenValidator");
// authorization
const authorization = require("./../Core/auth/authenticationMW");
//controllers
const controller=require("../Controllers/childController");
//route
const router=express.Router();


router.route("/child")
.all(authorization.checkAdminOrTeacher)
.get(validateChildren.getChild,validateMW,controller.getAllChild)
.post(validateChildren.addChild,validateMW,controller.addChild)
.put(validateChildren.updateChild,validateMW,controller.updateChild)
.delete(validateChildren.deleteChild,validateMW,controller.deleteChild);

//to get one child
router.get("/child/:id",authorization.checkAdminOrTeacher,controller.getChild)

//exports to app.js
module.exports=router;









