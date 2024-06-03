const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://root:toor@cluster0.xkbfrpi.mongodb.net/todoapp");

const schema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todos',schema);

module.exports={todo }