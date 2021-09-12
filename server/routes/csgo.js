const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
var axios = require("axios");

router.post("/test", auth, (req, res) => {
  console.log(req.body); 
  let thisURL =
    "https://apex-legends.p.rapidapi.com/stats/" +
    req.body.gamertag +
    "/" +
    req.body.console;

  var csgoOptions = {
    method: "GET",
    url: "https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198008049283",
    headers: {
        "TRN-Api-Key": "5c5a685f-65cb-48cc-aeed-bb496c307f92",
      "host": "public-api.tracker.gg",
    },
  };

  axios
    .request(csgoOptions)
    .then(function (response) {
      console.log(response.data);
      console.log("Hello")
      return res.json({ status: "success", data: response.data });
    })
    .catch(function (error) {
      console.error(error);
      return res.json({ status: "error", data: response.data });
    });
});

module.exports = router;
