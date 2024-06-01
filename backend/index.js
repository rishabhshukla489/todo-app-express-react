const {createTodo, updateTodo} =require("./types")
const express=require('express');
const app=express();

app.use(express.json());

app.post("/todo",(req,res)=>{
    const createPayload=req.body;
    const parsedPayload =createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wring inputs",
        })
        return; 
    }
})

app.get("/todos",(req,res)=>{
    
})

app.put("/completed",(req,res)=>{
    const donePayload=req.body;
    const parsedPayload =updateTodo.safeParse(donePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wring inputs",
        })
        return; 
    }
})

app.listen(3000);