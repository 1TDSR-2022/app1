const express = require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("<div>BEM VINDO! <a href='/tchau'>FUI></a</div>")
})

app.listen(3000)
