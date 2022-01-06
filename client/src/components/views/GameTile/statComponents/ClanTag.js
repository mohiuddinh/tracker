import { urlencoded } from "body-parser";
import React, { useState }  from "react";

const lib = require('lib')({token: 'tok_dev_DjZsadGJJzKbw4KBsFbe48EP7EiVrhsk5GeubzGDGvhurXbo1EECUAfbndxtVZtA'});

function ClanTag(props) {

    const [playerClanTag, setPlayerClanTag] = useState([]);


 var playerTag = (async () => {


    let clanTag = await lib.halo.infinite['@0.2.1'].appearance({
        
        gamertag: props.gamertag,
    });
     
      setPlayerClanTag([clanTag]);

    //   console.log(clanTag);

  });

  playerTag();

  function showClanTag() {
    return (
        <div>
        {playerClanTag.map((data,id) => {
          return <div key={id}>
                  <h1>({data.data.service_tag})</h1>
                 </div>
        })}
        </div>
    )
  }

  return (
      <>
        <div>
            {showClanTag()}
        </div>

      </>
  )

}


export default ClanTag;