const express = require ("express");
const request = require ("request");
const bodyparser = require ("body-parser");
const https = require("https");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

//home page
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/signup.html")
});

//signup route
app.post("/", (req, res)=>{
    const { firstName, lastName, email} = req.body;

//construct data
    const data = {
        members : [
            {
                email_address: email,
                status : "subscribed",
                merge_fields : {
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
            
    };
const jsonData = JSON.stringify(data);

//request options
const options = {
     url :"https://us12.api.mailchimp.com/3.0/lists/598b89296e",
     method: 'POST',
    headers:{
        Authorization : "auth 70bf7f1d1c8d92600d23c93d6aebec6c-us12"
    },
     body: jsonData
 };

 //request to mailchimp
request(options, (err, response, body)=>{

    //checking for error
    if(err || response.statusCode != 200){
        res.redirect('/failure.html');
    }else {
    res.redirect('/success.html');
    }
});
});

//listen port
app.listen (PORT, ()=>{
    console.log("running");
});

// 70bf7f1d1c8d92600d23c93d6aebec6c-us12
// 598b89296e