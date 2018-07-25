const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// Connect to the Mongo DB
// const seeds = require("./scripts/guideSeeds") 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/explore");

// Requiring our models for syncing
let db = require("./models");

// Define middleware here

/*========= Here we want to let the server know that we should expect and allow a header with the content-type of 'Authorization' ============*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

/*========= This is the typical node server setup so we can be able to parse the requests/responses coming in and out of the server ============*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*========= Here we will set up an express jsonwebtoken middleware(simply required for express to properly utilize the token for requests) You MUST instantiate this with the same secret that will be sent to the client ============*/
const jwtMW = exjwt({
  secret: 'random token name h3r3'
})

/* Create a signup post route that will store the username and password in our DB along with encrypting the password using the bcrypt package. We will want to store the password in the DB as a hash, which requires salting(A salt is random data that is used as an additional input to a one-way function that "hashes" data, a password or passphrase.)*/
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password)
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.User.insert({
      "name": name,
      "email": email,
      "password": hash
    }).then((result) => {
      console.log("user created:", result);
      res.json("user created!");
    })
  })
})

/* Create a login post route that will be sending the users credentials to the server for verification. This is SUPER important! If the credentials match, then the server sends back a json response with a valid json web token for the client to use for identification. */
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.user.find( 
    { email: email } 
  ).then((user) => {
    if(user === null){
      res.json(false);
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if(result === true){
        console.log("valid");
        let token = jwt.sign({ name: user.name }, 'random token name h3r3', {expiresIn: 129600});
        res.json({
          success: true,
          err: null,
          token
        })
      }
      else {
        console.log("Incorrect Password");
        res.status(401).json({
          success: false,
          token: null,
          err: 'Entered Password and Hash do not match'
        })
      }
    })
  })
})

/* The last route we need is a GET route to '/' Main reason for this is to prevent unauthorized requests to the server. So what we notice is that JWT can be used for both client side protected pages AND server side protected routes. You can setup ANY routes to require authentication with a token like so. */
app.get('/', jwtMW, (req, res) => {
  res.send('You are authenticated');
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});