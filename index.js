const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require("cors");
const bodyParser=require("body-parser");

app.use(cors());
app.use(bodyParser.json());


//importing functions
const {createNewTask,read,removeTask,update,updateStatus}=require("./src/controllers/API_FUNCTION.js")

/////mongooose connection
mongoose.connect("mongodb://127.0.0.1:27017/Todo-list");
mongoose.connection.on("connected",()=>{
    console.log("DB Connected");
})

app.post("/create-new-task",createNewTask);
app.get("/get-task",read);
app.delete("/delete-task",removeTask);
app.put("/update-task",update);
app.put("/update-status",updateStatus);





app.listen(2000,()=>{
    console.log("server started");
})