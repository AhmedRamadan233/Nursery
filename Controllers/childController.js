

const mongoose=require("mongoose");
require("./../Model/childModel");

const ChildrenSchema=mongoose.model("children");


exports.getAllChild=(request,response,next)=>{
    ChildrenSchema.find({})
    .then((data)=>{
            response.status(200).json({data});
    })
    .catch(error=>{
        next(error);
    })
    }

    exports.addChild=(request,response,next)=>{
        new ChildrenSchema({


            _id:request.body.id,
            fullName:request.body.fullName,
            age:request.body.age,
           level:request.body.level,
           address:request.body.address,
           }).save()  //insertOne
           .then(data=>{
            response.status(201).json({data});
           })
           .catch(error=>next(error))

    }

    exports.updateChild=(request,response,next)=>{
        ChildrenSchema.updateOne({
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
                next(new Error("children not found"));
            }
            else
            response.status(200).json({data:"updated"});
        })
        .catch(error=>next(error));


    }

    exports.deleteChild=(request,response,next)=>{
        ChildrenSchema.deleteOne({
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

    exports.getChild=(request,response,next)=>{
        ChildrenSchema.findOne({})
        .then((data)=>{
                response.status(200).json({data});
        })
        .catch(error=>{
            next(error);
        })
    }






