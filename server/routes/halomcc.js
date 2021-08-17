const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
var axios = require("axios");

router.post("/test", auth, (req, res) => {
    console.log(req.body);
    let thisURL = 
    "https://halo.api.stdlib.com/mcc@0.1.0/stats/?gamertag=" +
    req.body.gamertag;

    let thisURL2 = 
    "https://halo.api.stdlib.com/mcc@0.1.0/games/latest/?gamertag=" +
    req.body.gamertag +
    "&game=" +
    req.body.game +
    "&gameVariant=" +
    req.body.gameVariant;

console.log(thisURL2)
    // Halo%202


  let one =
  "https://halo.api.stdlib.com/mcc@0.1.0/stats/?gamertag=Kombatkid13";
  let two =
  "https://halo.api.stdlib.com/mcc@0.1.0/games/latest/?gamertag=Kombatkid13&game=Halo%202&gameVariant=CTF";


const requestOne = axios.get(thisURL);
const requestTwo = axios.get(thisURL2);

axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];

      // use/access the results
      console.log(responseOne.data, responseTwo.data);
      return res.json({ status: "success", dataOne: responseOne.data, dataTwo: responseTwo.data });
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });



     // var haloOptions = {
    //   method: "GET",
    //   url: "https://halo.api.stdlib.com/mcc@0.1.0/stats/?gamertag=Kombatkid13",
    //   headers: {
    //     "x-rapidapi-host": "https://halo.api.stdlib.com/mcc@0.1.0/stats/",
    //   },
    // };

    // var haloLatestOptions = {
    //   method: "GET",
    //   url: "https://halo.api.stdlib.com/mcc@0.1.0/games/latest/?gamertag=Kombatkid13&game=Halo%202&gameVariant=CTF",
    //   headers: {
    //     "x-rapidapi-host": "https://halo.api.stdlib.com/mcc@0.1.0/stats/",
    //   },
    // };

// axios
// .request(haloOptions, haloLatestOptions)
// .then(function (response) {
//     console.log(response.data);
//     return res.json({ status: "success", data: response.data });
// })
// .catch(function (error) {
//     console.error(error);
//     return res.json({ status: "error", data: response.data })
// })

// axios
// .request(haloLatestOptions)
// .then(function (response) {
// console.log(response.data);
// return res.json({ status: "success", data: response.data });
// })
// .catch(function (error) {
// console.error(error);
// return res.json({ status: "error", data: response.data })
// })

})

module.exports = router;