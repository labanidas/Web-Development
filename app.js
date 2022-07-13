//jshint esversion:6
require('dotenv').config()
const express =  require("express");
const bodyParser =  require("body-parser");
const ejs = require ("ejs");
// const { appendFile } = require("fs");
const mongoose = require("mongoose");
// const { runInNewContext } = require("vm");
const encrypt = require("mongoose-encryption");

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
    email:String,
    password:String
}); 

//encryption

userSchema.plugin(encrypt, {secret:process.env.SECRET , encryptedFiles:["password"]});

const User = mongoose.model("user", userSchema);

const app = express();
app.use(express.static(__dirname+"/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{res.render("home")});


app.route("/register")
.get((req,res)=>{res.render("register")})
.post((req,res)=>{
    console.log(req.body);
    const newUser =  new User({
        email:req.body.username,
        password:req.body.password
    })
    newUser.save((err)=>{
        if(!err) res.render("secrets");
        else console.log(err);
    })
});
// app.get("/register", );
// app.post("/register", )
app.route("/login")
.get((req,res)=>{res.render("login")})
.post((req,res)=>{
    const {username, password} = req.body;
    User.findOne({email:username} ,(err,result)=>{
        if(result) {
            if(result.password === password) res.render("secrets");
        } 
    })
})


app.listen(3000, ()=>{
console.log("Server is running")
});