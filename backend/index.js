const {createTodo, updateTodo} =require("./types")
const express=require('express');
const {todo}= require("./db")
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload =createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wring inputs",
        })
        return; 
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:" Todo created"
    })
})

app.get("/todos",async(req,res)=>{
     const todos=await todo.find({});
    res.json({
        todos
    })

})

app.put("/completed",async(req,res)=>{
    const donePayload=req.body;
    const parsedPayload =updateTodo.safeParse(donePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wring inputs",
        })
        return; 
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completd"
    })

})

app.listen(3000);