
const express = require('express');
const controller = require("./../Controllers/loginController");



const loginRouter = express.Router();
loginRouter.route("/login").post(controller.login);

module.exports = loginRouter;

