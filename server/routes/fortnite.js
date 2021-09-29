const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
var axios = require("axios");
const { response } = require("express");
// const FortniteAPI = require("fortnite-api-com");

// const fconfig = {
//     apikey: "72ebd6aaa1bbf3509b980f77f6a447c76a593081",
//     language: "en",
//     debug: true
//   };


// var Fortnite = new FortniteAPI(fconfig);

// router.get("/test", auth, (req, res) => {
//   console.log("yeee fortnite");
  
//   axios.request(
//   Fortnite.BRStats({name: "Kombatkid13", image: "gamepad"}))
//   .then(res => {
//     console.log(res.data.stats);
//     return res.json({status: "success", data: res.data.stats})
//   }).catch(err => {
//     console.log(err);
//     return res.json({status: "poop", data: res.data})
//   })

// });
router.post("/test", auth, (req, res) => {

  console.log(req.body);
    let thisURL = 
    "https://fortnite-api.com/v2/stats/br/v2/?name=" +
    req.body.gamertag;
  ;
    var fortniteOptions = {
      method: "GET",
      url: thisURL,
      headers: {
        "x-api-key": "72ebd6aaa1bbf3509b980f77f6a447c76a593081",
        "x-rapidapi-host": "fortnite-api-com",
      },
    };
  
    axios
      .request(fortniteOptions)
      .then(function (response) {
        console.log(response.data);
        return res.json({ status: "success", data: response.data.data });
      })
      .catch(function (error) {
        console.error(error);
        return res.json({ status: "error", data: response.data.data });
      });
  });


  
  

module.exports = router; 