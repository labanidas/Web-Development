//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const { request } = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
// const md5 = require("md5");      //hashing
// const { runInNewContext } = require("vm");
// const encrypt = require("mongoose-encryption");  //encryption
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: " The little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
//encryption

// userSchema.plugin(encrypt, {secret:process.env.SECRET , encryptedFiles:["password"]});

const User = new mongoose.model("user", userSchema);

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

////////////this serializer deserializer works with in all situation //////////
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

/////////////////////////////// google auth /////////////////////////////////////

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },

    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

///////////////////////////////get home page/////////////////////////////////////
app.get("/", (req, res) => {
  res.render("home");
});

/////////////////////////////// get auth/google/////////////////////////////////////
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

/////////////////////////////// auth/google/secret /////////////////////////////////////
app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  }
);

///////////////////////////////get secret-route authenticated /////////////////////////////////////
app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()){
    User.find({'secret' :{$ne: null}}, (err,foundUsers)=>{
      if(!err) res.render("secrets", {usersWithSecret: foundUsers} );
      else console.log(err);
    });
    

  }else  res.redirect("/login");
  
});

/////////////////////////////////      get     logout route          ///////////////////////////////
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
    else res.redirect("/");
  });
});

/////////////////////////////// submit route /////////////////////////////////////

app.route("/submit")
.get((req, res) => {
  if (req.isAuthenticated()) res.render("submit");
  else res.redirect("/login");
})
.post((req,res)=>{
  // console.log(req.user);
  User.findById(req.user.id, (err, foundUser)=>{
    foundUser.secret = req.body.secret;
    foundUser.save((err)=>{
      if(!err) res.redirect("/secrets");
      else console.log(err);
  });
  });
});

/////////////////////////////////   register route          ///////////////////////////////
app
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    // bcrypt.hash(req.body.password, saltRounds, (err, hash)=>{
    //     const newUser =  new User({
    //         email:req.body.username,
    //         password:hash
    //     })
    //     newUser.save((err)=>{
    //         if(!err) res.render("secrets");
    //         else console.log(err);
    //     })
    // })

    User.register(
      { username: req.body.username },
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
          res.redirect("/register");
        } else {
          passport.authenticate("local")(req, res, () => {
            res.redirect("/secrets");
          });
        }
      }
    );
  });

///////////////////////////////////     login route     /////////////////////////////
app
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    // const {username, password} = req.body;

    // password = md5(password);
    // User.findOne({email:username} ,(err,result)=>{
    //     if(result) {
    //         bcrypt.compare(password, result.password, (err,resultedpass)=>{
    //             if(resultedpass === true) res.render("secrets");n
    //         })
    //         // if(result.password === password) res.render("secrets");
    //     }
    // })

    const user = new User({
      email: req.body.username,
      password: req.body.password,
    });

    req.login(user, (err) => {
      if (err) console.log(err);
      else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secrets");
        });
      }
    });
  });

app.listen(3000, () => {
  console.log("Server is running");
});
