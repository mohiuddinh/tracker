import { urlencoded } from "body-parser";
import React, { useState }  from "react";

const lib = require('lib')({token: 'tok_dev_DjZsadGJJzKbw4KBsFbe48EP7EiVrhsk5GeubzGDGvhurXbo1EECUAfbndxtVZtA'});

function CSR(props) {

    const [playersCSRS, setPlayersCSRS] = useState([]);


 var playerCSRS = (async () => {

    // for(var i = 0; i < all.length; i++){

    //   let csrs = await lib.halo.infinite['@0.2.3'].stats.csrs({
    //     gamertag: props, // required
    //     season: 1
    //   });

    //   var CSRS = csrs.data
    //   console.log(CSRS);

    //   setPlayersCSRS((prev) => {
    //     return [
    //       ...prev,
    //       CSRS,
    //   ]
    //   });
    // };

    let csrs1 = await lib.halo.infinite['@0.2.3'].stats.csrs({
        gamertag: props.gamertag, // required
        season: 1
      });
     
      setPlayersCSRS([csrs1]);

    //   console.log(playersCSRS);

  });

  playerCSRS();

  function showCSRS() {
    return (
      <div>
        {playersCSRS.map((data,id) => {
          return <div key={id}>
          <h2>Cross-Play CSR: {data.data[0].response.all_time.value}</h2>
          <img className="rank" src={data.data[0].response.all_time.tier_image_url}/>
          <h2>Controller CSR: {data.data[1].response.all_time.value}</h2>
          <img className="rank" src={data.data[1].response.all_time.tier_image_url}/>
          <h2>MnK CSR: {data.data[2].response.all_time.value}</h2>
          <img className="rank" src={data.data[2].response.all_time.tier_image_url}/>

          </div>
        })}
      </div>
    )
  }

  return (
      <>
        <div>
            {showCSRS()}
        </div>

      </>
  )

}


export default CSR;