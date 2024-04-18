const express= require('express')
const app=express()

app.set("view engine","ejs") //view engine of our project is set to ejs so our ui will be rendered through ejs
app.get("/",(req,res)=>{
    const data={name:"Kusma",age:22}
    res.render("home",{data})
})
app.get("/blog/create",(req,res)=>{
    res.render("blog")
}) 
app.get("/blog/edit",(req,res)=>{
    res.render("edit")
})
app.get("/blog",(req,res)=>{
    res.send("Single blog")
})
app.listen(3000,()=>{
    console.log(" server has started on port 3000 ")
}) 
  