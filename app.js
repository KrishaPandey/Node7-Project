const express= require('express');
const { blogs } = require('./model/index');
const app=express()

require("./model/index"); 
app.set("view engine","ejs") //view engine of our project is set to ejs so our ui will be rendered through ejs
app.use(express.json())// postman or react js bata pathayo bhane yo chahincha 
app.use(express.urlencoded({extended:true}))//incoming data bujh bhaneko ho 
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

app.post("/blog", async (req,res)=>{
    // const title=req.body.title
    // const subtitle=req.body.subtitle
    // const description=req.body.description

    const{title,subtitle,description}=req.body
    await blogs.create({
        title:title,
        subTitle:subtitle,
        description:description
    })
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log(" server has started on port 3000 ")
}) 
  