const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
var axios = require("axios");
const createHirezSignature = require('hirez-signature');
const fetch = require('node-fetch');



function pad2(n) { return n < 10 ? '0' + n : n }

var date = new Date();
    
var timeStamp = ( date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() + 4 ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() ) );
console.log(timeStamp);
console.log('https://api.smitegame.com/smiteapi.svc/createsessionJson/4030/C5C296D9044B45FE8DB8F5BCF40DF5A9/' + timeStamp)



router.post("/test", auth, (req, res) => {
  console.log(req.body); 


  const createHirezSignature = require('hirez-signature');
const fetch = require('node-fetch');

async function fetchMethod(methodName = getPlayer, devId="4030", authKey="C5C296D9044B45FE8DB8F5BCF40DF5A9", session) {
  const { signature, timestamp } = await createHirezSignature(devId, methodName, authKey);
  const res = await fetch(`http://api.smitegame.com/smitgame.svc/${methodName}Json/${devId}/${signature}/${session ? `${session}/` : ''}${timestamp}`);
  return await res.json();
}

async function createSession(devId, authKey) {
  return await fetchMethod('createsession', devId, authKey);
}
setTimeout(() => {
    console.log(createSession());
  }, 3000)



  const TESTS = [
    {
      devId: '4030',
      methodName: 'getPlayer',
      authKey: 'C5C296D9044B45FE8DB8F5BCF40DF5A9',
      timestamp: timeStamp,
      signature:"3404cbad306bc4206b4299b74ede0fcd"
    },
    {
      devId: '4030',
      methodName: 'getPlayer',
      authKey: 'C5C296D9044B45FE8DB8F5BCF40DF5A9',
      timestamp: timeStamp,
      signature: 'ea665b5a12673d05896524511fe201fd'
    }
  ];
  
  async function test() {
    for (let t of TESTS) {
      const { signature, timestamp } = await createHirezSignature(t.devId, t.methodName, t.authKey, t.timestamp);
      if (signature !== t.signature) throw new Error(`Signature for ${t.methodName}[${t.devId}] is wrong ${signature}!=${t.signature}`);
    }
    console.log('All tests passed');
  }
  
  if (!require.parent) test().then(null,console.error);

//   axios
//     .request(apexOptions)
//     .then(function (response) {
//       console.log(response.data);
//       return res.json({ status: "success", data: response.data });
//     })
//     .catch(function (error) {
//       console.error(error);
//       return res.json({ status: "error", data: response.data });
//     });
});

module.exports = router;