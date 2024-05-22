import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 80;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs");
})

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})

app.post("/submit",(req,res)=>{

    const name = req.body["name"];
    const email = req.body["email"];
    const message = req.body["message"];
    
    res.render("contact.ejs",{
        uname: name,
        uemail: email,
        umessage: message,
    });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})