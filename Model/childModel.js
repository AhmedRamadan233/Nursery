const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    _id:Number,
    fullName:String,
    age:Number,
    level:String,
    address:String,
    class:{
        type:Number, 
        ref:"classes"
    }
});

mongoose.model("children",schema);