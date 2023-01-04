const express=require("express")
const app=express()
const path=require("path") 
const hbs=require("hbs")
const collection=require('./mongoose')

const templatePath=path.join(__dirname,'../templates')


app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
 app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("Login")
})


app.get("/signup",(req,res)=>{
    
    res.render("Signup")
})
app.post("/login", async (req,res)=>{
    // const {
    //     name,
    //     password
    // }=req.body;
    
    // collection.findOne({name:name},(err,result)=>{
    //     if(name===result.name){
    //         res.render("Home")
    //     }else{
    //        res.send("faild")
    //     }

    try{
        const email=req.body.email;
        const password=req.body.password;
    
        const getemail= await collection.findOne({email:email})
        // console.log(getemail.name);
        // res.send(getemail.name)
    
        if(getemail.password===password){
            res.render("Home");
        }else{
            res.send('password not match...')
        }
    }catch(err){
        res.send(err)
    }


    })

   

    
   


app.post("/signup", (req,res)=>{
   
//    console.log(req.body.name);
try{
    const password=req.body.password;
    const cpassword=req.body.cpassword;

    if(password===cpassword){
        const data={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            cpassword:req.body.cpassword,
        }
    
          collection.insertMany([data])
    
         res.render("Login")

    }else{
        res.send('password and cpassword are not match..')
    }

}catch(err){
 res.send(err)
}
   
})




app.listen(4000,()=>{
    console.log("port connected")
})