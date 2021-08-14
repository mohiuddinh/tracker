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
      "x-rapidapi-key": "f4a936d572msh54c9a38579e5eedp1223c7jsnf3bf55cba7f7",
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
