


const mongoose = require("mongoose");
require("./../Model/teacherModel");
const jwt = require("jsonwebtoken");
const TeacherSchema=mongoose.model("teachers");


exports.login = (request, response, next) => {
    if (request.body.userName == "Ramadan" && request.body.password == "12345") {
        let token = jwt.sign({
            role: "admin",
            userName: "Ramadan"
        },
        "OSTrack",
        { expiresIn: "1hr" });
        response.status(200).json({ data: "admin authorized", token });
    }
    else {
        TeacherSchema.findOne({ fullName: request.body.userName })
            .then(teachers => {
                if (teachers == null || request.body.password == null || request.body.password!= teachers.password) {
                    let error = new Error("Not Authenticated");
                    error.status = 401;
                    next(error);
                }
                else {
                    let token = jwt.sign({
                        id: teachers._id,
                        name: teachers.fullName,
                        role: "teachers",
                        password: teachers.password
                    },
                    "OSTrack",
                    { expiresIn: "1h" });
                    response.status(200).json({ data:"teacher", token });
                }
            })
            .catch(error => {
                next(error);
            })
    }
}