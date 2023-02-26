
const mongoose=require("mongoose");
require("./../Model/classModel");
require("./../Model/teacherModel");
require("./../Model/childModel");


const ClassesSchema=mongoose.model("classes");
const ChildrenSchema=mongoose.model("children");
const TeacherSchema=mongoose.model("teachers");


exports.getAllClass=(request,response,next)=>{

    ClassesSchema.find({}).populate("supervisor","fullName").populate("children","fullName")
        .then((data)=>{
                response.status(200).json({data});
        })
        .catch(error=>{
            next(error);
        })
    }

    exports.addClass= async(request,response,next)=>{

        // try{
        //     let teacher=await TeacherSchema.findOne({_id:request.body.supervisor},{_id:1});
        //     if (teacher == null)
        //         throw new Error("teacher not found");
        //         let data=await new ClassesSchema({
        //             _id:request.body.id,
        //             name:request.body.name,
        //             supervisor:request.body.supervisor,
        //             children:request.body.children,
        //         }).save();
        //         response.status(201).json({data})
        // }catch (error) {next(error); }//da e4ta3'l 

        // try{
        //     let child=await ChildrenSchema.find({_id:{$in:request.body.children}});
        //     if(child.length != request.body.children.length)
        //         throw new Error("child not found");
        //         // let data=await new ClassesSchema({
        //         //     _id:request.body.id,
        //         //     fullName:request.body.fullName,
        //         //     age:request.body.age,
        //         //     level:request.body.level,
        //         //     address:request.body.address,
        //         // }).save()
        //         response.status(201).json({data})
        // }catch (error) {next(error); }


    }

    exports.updateClass=(request,response,next)=>{
        ClassesSchema.updateOne({
            _id:request.body.id
        },{
            $set:{
            _id:request.body.id,
            name:request.body.name,
            supervisor:request.body.supervisor,
            children:request.body.children,
            }
        }).then(data=>{
            if(data.matchedCount==0)
            {
                next(new Error("class not found"));
            }
            else
            response.status(200).json({data:"updated"});
        }).catch(error=>next(error));


    }

    exports.deleteClass=(request,response)=>{
        ClassesSchema.deleteOne({
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

    exports.getClassOfChildren=(request,response,next)=>{
        ClassesSchema.findOne({_id:request.params.id},{children:true}).populate("children")
        .then((data)=>{
                response.status(200).json({data});
        })
        .catch(error=>{
            next(error);
        })
    }

    exports.getClassOfTeachers=(request,response,next)=>{
        ClassesSchema.findOne({_id:request.params.id},{supervisor:true}).populate("supervisor")
        .then((data)=>{
                response.status(200).json({data});
        })
        .catch(error=>{
            next(error);
        })
    }