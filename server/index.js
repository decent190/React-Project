const express = require("express");
const app = express ();
const userRouter = require("./routes/user.routes")
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set ("view engine","ejs")
app.use(express.static("public"));
app.use("/",userRouter)

// app.get("/",function (req,res){
// res.render("pages/index");
// });
app.listen(3000,()=>{
    console.log('running');
    
})

