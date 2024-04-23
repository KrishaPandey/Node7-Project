const express= require('express')
const app=express()

require("./model/index");
app.set("view engine","ejs") //view engine of our project is set to ejs so our ui will be rendered through ejs
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/blog/create",(req,res)=>{
    res.render("createblog")
}) 
app.get("/blog/edit",(req,res)=>{
    res.render("editblog")
})
app.get("/blog",(req,res)=>{
    res.render("blog")
})
app.listen(3000,()=>{
    console.log(" server has started on port 3000 ")
}) 
  