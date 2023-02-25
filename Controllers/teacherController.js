
const mongoose=require("mongoose");
require("./../Model/teacherModel");


const TeacherSchema=mongoose.model("teachers");
    exports.getAllTeacher=(request,response,next)=>{
        // console.log(request);
        TeacherSchema.find({})
        .then((data)=>{
                response.status(200).json({data});
        })
        .catch(error=>{
            next(error);
        })
    }

    exports.addTeacher=(request,response,next)=>{
        console.log(request.file)

        new TeacherSchema({

        _id:request.body.id,
        fullName:request.body.fullName,
        password:request.body.password,
        email:request.body.email,
        image:request.body.image,
       }).save()  //insertOne
       .then(data=>{
        response.status(201).json({data});
       })
       .catch(error=>next(error))
    }

    exports.updateTeacher=(request,response,next)=>{
        TeacherSchema.updateOne({
            _id:request.body.id
        },{
            $set:{
                fullName:request.body.fullName,
                password:request.body.password,
                email:request.body.email,
                image:request.body.image,
            }
        }).then(data=>{
            if(data.matchedCount==0)
            {
                next(new Error("teacher not found"));
            }
            else
            response.status(200).json({data:"updated"});
        })
        .catch(error=>next(error));

    }

    exports.deleteTeacher=(request,response,next)=>{
        TeacherSchema.deleteOne({
            _id:request.body.id
        })
        .then((data) => {
            if(data.deletedCount === 0) {
                response.status(404).json({msg: 'Not Found'});
            } else {
                response.status(200).json({msg: 'Deleted'});
            }
        })
    }









