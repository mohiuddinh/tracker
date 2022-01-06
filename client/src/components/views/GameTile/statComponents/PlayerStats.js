import { urlencoded } from "body-parser";
import React, { useState }  from "react";

const lib = require('lib')({token: 'tok_dev_DjZsadGJJzKbw4KBsFbe48EP7EiVrhsk5GeubzGDGvhurXbo1EECUAfbndxtVZtA'});

function PlayerStats(props) {

    const [playersStats, setPlayersStats] = useState([]);


 var playerStats = (async () => {

    

    let result1 = await lib.halo.infinite['@0.2.1'].stats['service-record']({
        gamertag: props.gamertag,
      });
     
      setPlayersStats([result1]);

    //   console.log(playersCSRS);

  });

  playerStats();

  function showPlayerStats() {
    return (
      <div>
        {playersStats.map((data,id) => {
                    return <div key={id} class="">
                      
                        <div className="stats">
                        <div className="statItem">
                        <h2>Kills</h2>
                        <h2>{data.data.core.summary.kills}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Deaths</h2>
                        <h2>{data.data.core.summary.deaths}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Assists</h2>
                        <h2>{data.data.core.summary.assists}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Betrayals</h2>
                        <h2>{data.data.core.summary.betrayals}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Suicides</h2>
                        <h2>{data.data.core.summary.suicides}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Medals</h2>
                        <h2>{data.data.core.summary.medals}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Medals</h2>
                        <h2>{data.data.core.summary.medals}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Damage Dealt</h2>
                        <h2>{data.data.core.damage.dealt}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Damage Taken</h2>
                        <h2>{data.data.core.damage.taken}</h2>
                        </div>
                        <div className="statItem">
                        <h2>Damage Taken</h2>
                        <h2>{data.data.core.damage.taken}</h2>
                        </div>


                        <div className="">
                        <h2>Time Played</h2>
                        <h2>{data.data.time_played.human}</h2>
                        </div>

                        <div className="statItem">
                        <h2>K/D</h2>
                        <h2>{data.data.core.kdr}</h2>
                        </div>

                        <div className="statItem">
                        <h2>Wins</h2>
                        <h2>{data.data.core.breakdowns.matches.wins}</h2>
                        </div>

                        <div className="statItem">
                        <h2>Losses</h2>
                        <h2>{data.data.core.breakdowns.matches.losses}</h2>
                        </div>

                        <div className="statItem">
                        <h2>Games Left</h2>
                        <h2>{data.data.core.breakdowns.matches.left}</h2>
                        </div>
                        

                        </div>
                        </div>
                })}
      </div>
    )
  }

  return (
      <>
        <div>
            {showPlayerStats()}
        </div>

      </>
  )

}


export default PlayerStats;