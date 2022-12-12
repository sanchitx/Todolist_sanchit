const mongoose=require('mongoose');

const TodoSchema=mongoose.Schema({
    Title:String,
    Description:String,
    Completed:Boolean,
})

const Todo=mongoose.model("TO-DO",TodoSchema);
module.exports={Todo};