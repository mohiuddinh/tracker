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

    var apexToken = process.env.REACT_APP_APEX_API_KEY;

  var apexOptions = {
    method: "GET",
    url: thisURL,
    headers: {
      "x-rapidapi-key": "f4a936d572msh54c9a38579e5eedp1223c7jsnf3bf55cba7f7",
      "apexToken": "5c5a685f-65cb-48cc-aeed-bb496c30",
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
