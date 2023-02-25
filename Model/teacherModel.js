const mongoose=require("mongoose");




const schema=new mongoose.Schema({
    _id:Number,
    fullName:String,
    password:String,
    email:String,
    image:String,

});

mongoose.model("teachers",schema);




