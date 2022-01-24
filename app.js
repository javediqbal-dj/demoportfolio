const express = require("express");
const expressLayouts = require("express-ejs-layouts")
const path = require("path");
const app = express();

const port =80;

// expresss stufff for serving files global for pug
app.use("/static", express.static("static")); // for serving a static file in global level for pug
app.use(expressLayouts)
app.use(express.urlencoded({extended:true}));  
// this is express build in body parser used to convert request into json

// pug set 
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"views"));



// End points 
app.get("/", (req,res)=>{
res.render("layout")
})



// listening port 
app.listen(port,(req,res)=>{
    console.log(`your server started listening at port: ${port}`)
})