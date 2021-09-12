const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const https = require("https");
const request = require("request");
const dotenv = require("dotenv");
const axios = require("axios").default;
const battlegrounds = require('battlegrounds')


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

// const fconfig = {
//   apikey: "72ebd6aaa1bbf3509b980f77f6a447c76a593081",
//   language: "en",
//   debug: true
// };

//   const FortniteAPI = require("fortnite-api-com");

  
//   var Fortnite = new FortniteAPI(fconfig);
  
//   Fortnite.BRStats({name: "Kombatkid13", image: "gamepad"})
//   .then(res => {
//     console.log(res.data.stats);
//   }).catch(err => {
//     console.log(err);
//   })

  // app.use("/api/v2/profile", require("./routes/users"));

  // var apexOptions = {
  //   method: 'GET',
  //   url: 'https://apex-legends.p.rapidapi.com/stats/Kombatkid13/X1',
  //   headers: {
  //     'x-rapidapi-key': 'f4a936d572msh54c9a38579e5eedp1223c7jsnf3bf55cba7f7',
  //     'x-rapidapi-host': 'apex-legends.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(apexOptions).then(function (response) {
  //   console.log(response.data.legends.all.Revenant);
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


// https://github.com/salikx/TheDivisionTab-API SOURCE
// axios.request("https://thedivisiontab.com/api/search.php?name=baiier&platform=uplay").then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.error(err);
// })

// SOURCE https://github.com/feed4rz/node-battlegrounds
// var pubgAPIKEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlMjI4MTk0MC1kMjBjLTAxMzktZDhmZi01YmZmN2VjMTVjNzUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjI3NTAyNjQ0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii01NWIyYzViMC0yOWVlLTQxOTQtOWQ0Zi02N2I4NTVlOWQ2YjgifQ.qGeioPuGRNrou8OcCpC974z62TkBkzzQxUVP8jMat2E"

// const pubgApi = new battlegrounds(pubgAPIKEY, 'pc-na')

// async function findShroud() {
//   try {
//     const res = await pubgApi.getPlayer({ id: 'account.d50fdc18fcad49c691d38466bed6f8fd' })

//     console.log('result:')
//     console.log(res)
//   } catch(err) {
//   	console.log('error:')
//     console.error(err)
//   }
// }
// findShroud()


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


//   function pad2(n) { return n < 10 ? '0' + n : n }

//   var date = new Date();
      
//   var timeStamp = ( date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() + 4 ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() ) );
// console.log(timeStamp);
// console.log('https://api.smitegame.com/smiteapi.svc/createsessionJson/4030/C5C296D9044B45FE8DB8F5BCF40DF5A9/' + timeStamp)

// var options = {
//     method: 'GET',
//     url: 'https://api.smitegame.com/smiteapi.svc/createsessionJson/4030/C5C296D9044B45FE8DB8F5BCF40DF5A9/' + timeStamp,
//     headers: {
      
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });





  

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
app.use('/api/apex', require('./routes/apex')); 
app.use('/api/fortnite', require('./routes/fortnite'));
app.use('/api/halomcc', require('./routes/halomcc'));
app.use('/api/csgo', require('./routes/csgo'));
app.use('/api/stores', require('./routes/stores'));

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