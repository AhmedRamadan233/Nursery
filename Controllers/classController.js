
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




        
        // const makeModuleAndBatteryPromises = async() => {

        //     const promises = arrayOfObjects.map(async obj => {
        //         let teacher=await TeacherSchema.findOne({_id:request.body.supervisor},{_id:1});
        //         let child=await ChildrenSchema.find({_id:{$in:request.body.children}});
        //         return assignAssets(child);
        //     });
        
        //     const res = await Promise.all(promises);
        //     const finalValue = res.at(-1); // or res[res.length-1];
        //     // do things with finalValue
        // }
        // makeModuleAndBatteryPromises()




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






    // _id:request.body.id,
    //                 name:request.body.name,
    //                 supervisor:request.body.supervisor,
    //                 children:request.body.children,







    //  TeacherSchema.findOne({_id:request.body.supervisor},{_id:1})

        // .then(data=>{
        //     if(data==null)
        //     {
        //         console.log("ana f error bta3 el suberva")
        //         next(new Error("Teachufuguyjyvjer not Found"))
        //     }else{
        //         return new ClassesSchema({
        //             _id:request.body.id,
        //             name:request.body.name,
        //             supervisor:request.body.supervisor,
        //             children:request.body.children,
        //         }).save()  //insertOne
        //     }
        // }).catch(error=>next(error))

        // ChildrenSchema.find({_id:{$in:request.body.children}})
        // .then(data=>{
        //     if(data.length != request.body.children.length)
        //     {
        //         console.log("ana f error bta3 el child")
        //         next(new Error("Child not Found"))
        //     }
        // })

        //     .then(data=>{
        //         console.log("then data")

        //         response.status(201).json({data});
        //     })





