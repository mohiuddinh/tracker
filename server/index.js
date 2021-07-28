const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const https = require("https");
const request = require("request");
const dotenv = require("dotenv");
const axios = require("axios").default;
const lib = require('lib')({token: null /* link an account to create an identity */});
const API = require('call-of-duty-api')();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

dotenv.config({ path: ".config.env"});


// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const { response } = require("express");
const router = require("./routes/users");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  // ALL API'S ARE BENEATH HERE

  // Tested fortnite API to see stats in console log
  // const FortniteAPI = require("fortnite-api-com");

  
  // var Fortnite = new FortniteAPI(config);
  
  // Fortnite.BRStats({name: "Kombatkid13", image: "gamepad"})
  // .then(res => {
  //   console.log(res.data.stats);
  // }).catch(err => {
  //   console.log(err);
  // })

  // app.use("/api/v2/profile", require("./routes/users"));

  // var apexOptions = {
  //   method: 'GET',
  //   url: 'https://apex-legends.p.rapidapi.com/stats/Kombatkid13/X1',
  //   headers: {
  //     'x-rapidapi-key': '1e88b9c971msh9358dd961449b60p1c4a67jsn82308f43c5f9',
  //     'x-rapidapi-host': 'apex-legends.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(apexOptions).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });



// var storeOptions = {
//   method: 'GET',
//   url: 'https://game-prices.p.rapidapi.com/game/minecraft',
//   params: {region: 'us', type: 'game'},
//   headers: {
//     'x-rapidapi-key': '1e88b9c971msh9358dd961449b60p1c4a67jsn82308f43c5f9',
//     'x-rapidapi-host': 'game-prices.p.rapidapi.com'
//   }
// };

// axios.request(storeOptions).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//HALO MCC API

// var halo = (async () => {
//   // Using Node.js 12.x +
// // use "lib" package from npm

// // make API request
// let result = await lib.halo.mcc['@0.1.0'].stats({
//   gamertag: "Kombatkid13" // required
// });
// console.log(result);
// })();





  //TRACKER.GG API IS NOT AS GOOD
  // var options = {
  //   method: 'GET',
  //   url: 'https://public-api.tracker.gg/v2/apex/standard/profile/xbl/Kombatkid13',
  //   headers: {
  //     "TRN-Api-Key": "5c5a685f-65cb-48cc-aeed-bb496c307f92",
  //     'TRN-host': 'public-api.tracker.gg',
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  

//END API'S 
// REMEMBER TO CREDIT SOURCES


//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});