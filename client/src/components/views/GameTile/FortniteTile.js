import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;



function FortniteTile() {

    const [fortnite, setFortnite] = useState({});

    const [overall, setOverall] = useState({});

    const [solo, setSolo] = useState({});

    const [duo, setDuo] = useState({});

    const [squad, setSquad] = useState({});

    const objectNames = {
      0: "Hello",
        1: "deaths",
        2: "kd",
        3: "kills",
        4: "killsPerMatch",
        5: "killsPerMin",
        6: "matches",
        7: "minutesPlayed",
        8: "playersOutlived",
        9: "score",
        10: "scorePerMatch",
        11: "winRate",
        12: "wins",
    }


    function callAPI() {

    axios.get("/api/fortnite/test").then((res) => {
    
        var response = res.data.data;

        console.log(res.data.data)
        setFortnite((prev) => {
            return ({
            ...prev,
            name: response.account.name,
            id: response.account.id,
            })
        })
        
        var overall = response.stats.all.overall;
        setOverall((prev) => {
            return ({
            ...prev,
            deaths: overall.deaths,
            kd: overall.kd,
            kills: overall.kills,
            killsPerMatch: overall.killsPerMatch,
            killsPerMin: overall.killsPerMin,
            matches: overall.matches,
            minutesPlayed: overall.minutesPlayed,
            playersOutlived: overall.playersOutlived,
            score: overall.score,
            scorePerMatch: overall.scorePerMatch,
            // top3: overall.top3,
            // top5: overall.top5,
            // top6: overall.top6,
            // top10: overall.top10,
            // top12: overall.top12,
            // top25: overall.top25,
            winRate: overall.winRate,
            wins: overall.wins,
            })
        })

        var solo = response.stats.all.solo;
        setSolo((prev) => {
            return ({
            ...prev,
            deaths: solo.deaths,
            kd: solo.kd,
            kills: solo.kills,
            killsPerMatch: solo.killsPerMatch,
            killsPerMin: solo.killsPerMin,
            matches: solo.matches,
            minutesPlayed: solo.minutesPlayed,
            playersOutlived: solo.playersOutlived,
            score: solo.score,
            scorePerMatch: solo.scorePerMatch,
            top10: solo.top10,
            top25: solo.top25,
            winRate: solo.winRate,
            wins: solo.wins,

            })
        })

        var duo = response.stats.all.duo;
        setDuo((prev) => {
            return ({
            ...prev,
            deaths: duo.deaths,
            kd: duo.kd,
            kills: duo.kills,
            killsPerMatch: duo.killsPerMatch,
            killsPerMin: duo.killsPerMin,
            matches: duo.matches,
            minutesPlayed: duo.minutesPlayed,
            playersOutlived: duo.playersOutlived,
            score: duo.score,
            scorePerMatch: duo.scorePerMatch,
            top5: duo.top5,
            top12: duo.top12,
            winRate: duo.winRate,
            wins: duo.wins,
            })
        })

        var squad = response.stats.all.squad;
        setSquad((prev) => {
            return ({
            ...prev,
            deaths: squad.deaths,
            kd: squad.kd,
            kills: squad.kills,
            killsPerMatch: squad.killsPerMatch,
            killsPerMin: squad.killsPerMin,
            matches: squad.matches,
            minutesPlayed: squad.minutesPlayed,
            playersOutlived: squad.playersOutlived,
            score: squad.score,
            scorePerMatch: squad.scorePerMatch,
            top3: squad.top3,
            top6: squad.top6,
            winRate: squad.winRate,
            wins: squad.wins,
            })
        })

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
            <button name="Show" onClick={() => {
          callAPI();
          showResults("Show");
        }}>Search for Results</button>
          </div>
          )
        }else{
          return(
          <div>
           
            <h1>Fortnite</h1>
            {Object.keys(overall).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{objectNames[i]}</h2>  
                <p className="Stat Row">{overall[keyName]}</p>
                </div>
                ))}
                <button name="Show" onClick={() => {
          callAPI();
          showResults("Hide");
        }}>Hide Results</button>
          </div>
          )
        }
      }


    return (
        <div className="GameTile">
            {displayContent()}
        {/* <div className="GameTile left">
            <h1>Fortnite</h1>
            {Object.keys(overall).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{objectNames[i]}</h2>  
                <p className="Stat Row">{overall[keyName]}</p>
                </div>
                ))}
                
        </div>

        <div className="GameTile right">
            <h1>Fortnite</h1>
            {Object.keys(solo).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{objectNames[i]}</h2>  
                <p className="Stat Row">{solo[keyName]}</p>
                </div>
                ))}
                
        </div> */}

        

        {/* <button onClick={callAPI}>Click Here</button> */}

        </div>
        
    )

}

export default FortniteTile;