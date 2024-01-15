const mongoose=require("mongoose");
const empSchema=new mongoose.Schema({
    name:String,
    age:Number,
    dob:Number,
    email: String,
    dept:String,
    id:Number,
    contactno:Number,
    jod:Number

})
module.exports=mongoose.model("emp",empSchema);
