const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
var axios = require("axios");
const lib = require('lib')({token: 'tok_dev_QENCWQAKCeCVf2P2wgKDHgw9GU81tGBTtpuwkR5gNR7HwP6KHvnP2G6CkYyncCBH'});


router.post("/test", auth, (req, res) => {
    console.log(req.body);

  

// make API request
var haloInfinite = (async () => {

  let result = await lib.halo.infinite['@0.2.1'].articles({
    language: 'en-US'
  });

  console.log(result);
})
haloInfinite();

console.log(result);

    axios
.request(haloOptions)
.then(function (response) {
    console.log(response.data);
    return res.json({ status: "success", data: response.data });
})
.catch(function (error) {
    console.error(error);
    return res.json({ status: "error", data: response.data })
})

});


module.exports = router;