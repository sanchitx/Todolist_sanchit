const { response, request } = require("express");
const {Todo}=require("../Model/model");

const createNewTask=async(request,response)=>{
    await Todo.create(request.body);
    return response.json({data:"Task created"});

}

const read=async(request,response)=>{
    const id=request.query.id;
    if(id){
        var tasks=await Todo.findById(id);
    }
    else{
        var tasks=await Todo.find();
    }
    return response.json(tasks);

}

const removeTask=async(request,response)=>{
    const id=request.query.id;
    await Todo.findByIdAndDelete(id);
    return response.json({data:"Task deleted"})
}

const update=async(request,response)=>{
    const id=request.query.id;
    await Todo.findByIdAndUpdate(id,request.body);
    return response.json({data:"Task Updated"})
}

const updateStatus=async(request,response)=>{
    const id=request.query.id;
    await Todo.findByIdAndUpdate(id,request.body);
    return response.json({data:"Status Updated"})

}

module.exports={createNewTask,read,removeTask,update,updateStatus};