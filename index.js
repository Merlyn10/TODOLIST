const express=require("express")
const https=require("https")
const body=require("body-parser")
const app=express()
app.use(express.static("public"))
app.use(body.urlencoded({extended:true}))
app.set('view engine','ejs')

var lists=[]

app.get("/",function(req,res){
 res.render('index',{tasks:lists})
})
app.post("/",function(req,res){
 var task=req.body.task
  lists.push(task)
  res.redirect("/")
})

app.listen(process.env.PORT ||3000,function(){
    console.log("server is up")
})