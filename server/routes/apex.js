const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
var axios = require("axios");

router.get("/test", auth, (req, res) => {
  console.log("yeee boi");
  var apexOptions = {
    method: "GET",
    url: "https://apex-legends.p.rapidapi.com/stats/Kombatkid13/X1",
    headers: {
      "x-rapidapi-key": "1e88b9c971msh9358dd961449b60p1c4a67jsn82308f43c5f9",
      "x-rapidapi-host": "apex-legends.p.rapidapi.com",
    },
  };

  axios
    .request(apexOptions)
    .then(function (response) {
      console.log(response.data);
      return res.json({ status: "success", data: response.data });
    })
    .catch(function (error) {
      console.error(error);
      return res.json({ status: "error", data: response.data });
    });
});

module.exports = router; 
