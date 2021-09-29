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

    const [params, setParams] = useState({
      gamertag: "Kombatkid13",
      gameType: "Solo",
  })


    function callAPI() {

      let variable = params;
    axios.post("/api/fortnite/test", variable).then((res) => {
    
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
            "Kills": overall.kills,
            "Deaths": overall.deaths,
            "Kill Death Ratio": overall.kd,
            "Kills Per Match": overall.killsPerMatch,
            // killsPerMin: overall.killsPerMin,
            "Matches Played": overall.matches,
            "Minutes Played": overall.minutesPlayed,
            "Players Outlived": overall.playersOutlived,
            "Score": overall.score,
            "Average Score Per Match": overall.scorePerMatch,
            // top3: overall.top3,
            // top5: overall.top5,
            // top6: overall.top6,
            // top10: overall.top10,
            // top12: overall.top12,
            // top25: overall.top25,
            "Wins": overall.wins,
            "Win Rate": overall.winRate,
            
            })
        })

        var solo = response.stats.all.solo;
        setSolo((prev) => {
            return ({
            ...prev,
            "Wins": solo.wins,
            "Kills": solo.kills,
            "Deaths": solo.deaths,
            "Kill Death Ratio": solo.kd,
            
            "Kills Per Match": solo.killsPerMatch,
            // killsPerMin: solo.killsPerMin,
            "Matches Played": solo.matches,
            "Minutes Played": solo.minutesPlayed,
            "Players Outlived": solo.playersOutlived,
            "Score": solo.score,
            "Score Per Match": solo.scorePerMatch,
            "Top 10:": solo.top10,
            "Top 25": solo.top25,
            
            "Win Rate": solo.winRate,
            

            })
        })

        var duo = response.stats.all.duo;
        setDuo((prev) => {
            return ({
            ...prev,
            "Wins": duo.wins,
            "Kills": duo.kills,
            "Deaths": duo.deaths,
            "Kill Death Ratio": duo.kd,
            
            "Kills Per Match": duo.killsPerMatch,
            // killsPerMin: duo.killsPerMin,
            "Matches Played": duo.matches,
            "Minutes Played": duo.minutesPlayed,
            "Players Outlived": duo.playersOutlived,
            "Score": duo.score,
            "Score Per Match": duo.scorePerMatch,
            "Top 5": duo.top5,
            "Top 12": duo.top12,
            "Win Rate": duo.winRate,
            
            })
        })

        var squad = response.stats.all.squad;
        setSquad((prev) => {
            return ({
            ...prev,
            "Wins": squad.wins,
            "Kills": squad.kills,
            "Deaths": squad.deaths,
            "Kill Death Ratio": squad.kd,
            "Matches Played": squad.matches,
            "Kills Per Match": squad.killsPerMatch,
            // "Kills Per Minute": squad.killsPerMin,
            
            "Minutes Played": squad.minutesPlayed,
            "Players Outlived": squad.playersOutlived,
            "Score": squad.score,
            // scorePerMatch: squad.scorePerMatch,
            "Top 3": squad.top3,
            "Top 6": squad.top6,
            "Win Rate": squad.winRate,
            
            })
        })

        });
    }

    function handleChange(event) {

      const {value, name} = event.target;
  
      setParams(prev => {
        if (name === "gameType"){
          return {
              ...prev,
              gameType: value
          }
        } else {
            return {
                ...prev,
                gamertag: value,
            }
        }
      })
      event.preventDefault();
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
    
      function gameType() {
        if(params.gameType == "Overall"){
           return(
             <div>
            {Object.keys(overall).map((keyName, i) => (
              <div className="Stats">
              <h2 className="StatTile Row">{Object.keys(overall)[i]}</h2>  
              <p className="Stat Row">{overall[keyName]}</p>
              </div>
              ))}
              </div>
           )
        } else if(params.gameType == "Solo"){
          return(
            <div>
           {Object.keys(solo).map((keyName, i) => (
             <div className="Stats">
             <h2 className="StatTile Row">{Object.keys(solo)[i]}</h2>  
             <p className="Stat Row">{solo[keyName]}</p>
             </div>
             ))}
             </div>
          )
        } else if(params.gameType == "Duos"){
          return(
            <div>
           {Object.keys(duo).map((keyName, i) => (
             <div className="Stats">
             <h2 className="StatTile Row">{Object.keys(duo)[i]}</h2>  
             <p className="Stat Row">{duo[keyName]}</p>
             </div>
             ))}
             </div>
          )
        } else if(params.gameType == "Squads"){
          return(
            <div>
           {Object.keys(squad).map((keyName, i) => (
             <div className="Stats">
             <h2 className="StatTile Row">{Object.keys(squad)[i]}</h2>  
             <p className="Stat Row">{squad[keyName]}</p>
             </div>
             ))}
             </div>
          )
        }
      }


      function displayContent() {
        if(showContent.showContent == false){
          return(
          <div>
            <button name="Show" onClick={() => {
          callAPI();
          showResults("Show");
        }}>Search for Results</button>
        
  <form>
    <input value={params.gamertag} name="gamerTag" onChange={handleChange}></input>
    <select value={params.gameType} name="gameType" onChange={handleChange}>
        
         <option value="Overall">Overall</option>
         <option value="Solo">Solo</option>
         <option value="Duos">Duos</option>
         <option value="Squads">Squads</option>
  
    </select>
</form>
          </div>
          )
        }else{
          return(
          <div>
           
            <h1>Fortnite</h1>
              {gameType()}
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

        </div>
        
    )

}

export default FortniteTile;