import { urlencoded } from "body-parser";
import React, { useState } from "react";
import "./GameTile.css";
const axios = require("axios").default;

function CSGOTile() {
  const [csgoObjective, setcsgoObjective] = useState({});
  const [csgoCombat, setcsgoCombat] = useState({});
  const [csgoGR, setcsgoGR] = useState({});

  var csgoObjectiveNames = {
      
    1: "bombsDefusedAmount",
    2: "bombsDefusedPercentile",
    3: "bombsPlantedAmount",
    4: "bombsPlantedPercentile",
    5: "hostagesRescuedAmount",
    6: "hostagesRescuedPercentile",
    7: "moneyEarnedAmount",
    8: "moneyEarnedPercentile",
    9: "mvpAmount",
    10: "mvpPercentile",
      
  }
  var csgoCombatNames = {
      
    0:"damageAmount",
    1:"damagePercentile",
    2:"deathsAmount",
    3:"deathsPercentile",
    4:"dominationOverkillsAmount",
    5:"dominationOverkillsPercentile",
    6:"dominationRevengesAmount",
    7:"dominationRevengesPercentile",
    8:"dominationsAmount",
    9:"dominationsPercentile",
    10:"headshotPctAmount",
    11:"headshotPctPercentile",
    12:"headshotsAmount",
    13:"headshotsPercentile",
    14:"kdAmount",
    15:"kdPercentile",
    16:"killsAmount",
    17:"killsPercentile",
    18:"shotsAccuracyAmount",
    19:"shotsAccuracyPercentile",
    20:"shotsFiredAmount",
    21:"shotsFiredPercentile", 
    22:"shotsHitAmount",
    23:"shotsHitPercentile",
    24:"snipersKilledAmount",
    25:"snipersKilledPercentile", 
      
  }

  function handleChange(event) {
      
        let gamerTag = event.target.value;

        setParams((prev) => {
            return ({
                ...prev,
                gamertag: gamerTag,
            }
            )
        })
        
  }

  const [params, setParams] = useState({
      gamertag: "",
      console: "X1"
  });

  function callAPI() {
    let variable = params   //{ gamertag: "zurges", console: "X1" };
    axios.post("/api/csgo/test", variable).then((res) => {
        console.log(res); 
        const stats = res.data.data.data.segments[0].stats
        console.log(stats)
      setcsgoObjective((prev) => {
        return {
          ...prev,
          bombsDefusedAmount: stats.bombsDefused.value,
          bombsDefusedPercentile: stats.bombsDefused.percentile,
          bombsPlantedAmount: stats.bombsPlanted.value,
          bombsPlantedPercentile: stats.bombsPlanted.percentile,
          hostagesRescuedAmount: stats.hostagesRescued.value,
          hostagesRescuedPercentile: stats.hostagesRescued.percentile,
          moneyEarnedAmount: stats.moneyEarned.value,
          moneyEarnedPercentile: stats.moneyEarned.percentile,
          mvpAmount: stats.mvp.value,
          mvpPercentile: stats.mvp.percentile,
        };
      });

      setcsgoCombat((prev) => {
        return {
            ...prev,
            damageAmount: stats.damage.value,
            damagePercentile: stats.damage.percentile,
            deathsAmount: stats.deaths.value,
            deathsPercentile: stats.deaths.percentile,
            dominationOverkillsAmount: stats.dominationOverkills.value,
            dominationOverkillsPercentile: stats.dominationOverkills.percentile,
            dominationRevengesAmount: stats.dominationRevenges.value,
            dominationRevengesPercentile: stats.dominationRevenges.percentile,
            dominationsAmount: stats.dominations.value,
            dominationsPercentile: stats.dominations.percentile,
            headshotPctAmount: stats.headshotPct.value,
            headshotPctPercentile: stats.headshotPct.percentile,
            headshotsAmount: stats.headshots.value,
            headshotsPercentile: stats.headshots.percentile,
            kdAmount: Math.round((stats.kd.value) * 10) / 10,
            kdPercentile: stats.kd.percentile,
            killsAmount: stats.kills.value,
            killsPercentile: stats.kills.percentile,
            shotsAccuracyAmount: Math.round((stats.shotsAccuracy.value) * 10) / 10,
            shotsAccuracyPercentile: stats.shotsAccuracy.percentile,
            shotsFiredAmount: stats.shotsFired.value,
            shotsFiredPercentile: stats.shotsFired.percentile,
            shotsHitAmount: stats.shotsHit.value,
            shotsHitPercentile: stats.shotsHit.percentile,
            snipersKilledAmount: stats.snipersKilled.value,
            snipersKilledPercentile: stats.snipersKilled.percentile,
        }
      });

      setcsgoGR((prev) => {
        return {
            ...prev,
            wlPercentageAmount: stats.wlPercentage.value,
            wlPercentagePercentile: stats.wlPercentage.percentile,
            winsAmount: stats.wins.value,
            winsPercentile: stats.wins.percentile,
            timePlayedAmount: stats.timePlayed.value,
            timePlayedPercentile: stats.timePlayed.percentile,
            tiesAmount: stats.ties.value,
            tiesPercentile: stats.ties.percentile,
            scoreAmount: stats.score.value,
            scorePercentile: stats.score.percentile,
            roundsWonAmount: stats.roundsWon.value,
            roundsWonPercentile: stats.roundsWon.percentile,
            roundsPlayedAmount: stats.roundsPlayed.value,
            roundsPlayedPercentile: stats.roundsPlayed.percentile,
            matchesPlayedAmount: stats.matchesPlayed.value,
            matchesPlayedPercentile: stats.matchesPlayed.percentile,
            lossesAmount: stats.losses.value,
            lossesPercentile: stats.losses.percentile,            
        }
      });


    });
    
  }

  function showResults(event) {


    if(event === "Show"){
      setTimeout(() => {
        setShowContent({showContent: true});
      }, 1500)
      
    }else{
      setTimeout(() => {
        setShowContent({showContent: false});
      }, 250)
    }
  }

  const [showContent, setShowContent] = useState({showContent: false})

  function displayContent() {
    if(showContent.showContent == false){
      return(
      <div>
        <form>
        <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={params.gamerTag}
      />
        </form>
        <button name="Show" onClick={() => {
          callAPI();
          showResults("Show");
        }}>Search for Results</button>
      </div>
      )
    }else{
      return(
      <div>
        {Object.keys(csgoCombat).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{csgoCombatNames[i]}</h2>  
                <p className="Stat Row">{csgoCombat[keyName]}</p>
                </div>
                ))}
        {Object.keys(csgoObjective).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{csgoObjectiveNames[i]}</h2>  
                <p className="Stat Row">{csgoObjective[keyName]}</p>
                </div>
                ))}
        {/* {Object.keys(csgoGR).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{csgoObjectiveNames[i]}</h2>  
                <p className="Stat Row">{csgoObjective[keyName]}</p>
                </div>
                ))} */}
                <button name="Hide" onClick={() => {
                  callAPI();
                  showResults("Hide");
                }}>Hide Results</button>
      </div>
      )
    }
  }

  return (
    <div className="GameTile">
      <h1>CSGO</h1>
      {displayContent()}

    </div>
  );
}

export default CSGOTile;