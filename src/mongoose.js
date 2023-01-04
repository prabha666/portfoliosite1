const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://root:root@cluster0.jornmsw.mongodb.net/test")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connected")
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1",LogInSchema)
module.exports=collection
