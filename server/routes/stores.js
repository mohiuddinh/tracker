var axios = require("axios").default;

const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");



router.post("/test", auth, (req, res) => {
    console.log(req.body); 
    let thisURL =
      "https://game-prices.p.rapidapi.com/game/" +
      req.body.gameName;
      let game = req.body.gameName;
  

      var storeOptions = {
        method: 'GET',
        url: 'https://cheapshark-game-deals.p.rapidapi.com/games',
        params: {title: game, exact: '0', limit: '10'},
        headers: {
          'x-rapidapi-host': 'cheapshark-game-deals.p.rapidapi.com',
          'x-rapidapi-key': 'f4a936d572msh54c9a38579e5eedp1223c7jsnf3bf55cba7f7'
        }
      };
      
      axios
    .request(storeOptions)
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