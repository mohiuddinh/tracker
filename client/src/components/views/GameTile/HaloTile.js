import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;


function HaloTile() {

    const [haloGeneral, setHaloGeneral] = useState({});
    const [haloMatch, setHaloMatch] = useState({});

    const haloGeneralNames = {
        1: "Gamertag",
        // 2: "Clan Tag",
        // 3: "Total Play Time",
        2: "Total Games Played",
        3: "Wins",
        4: "Losses",
        5: "Win Ratio",
        6: "Kills",
        7: "Deaths",
        8: "Kills Per Game",
        9: "Kill Death Ratio",
        10: "Deaths Per Game",
        // 13: "Current Streak",
    }

    const haloMatchNames = {
        1: "Game Variant",
        2: "Win(true) / Loss(false)",
        3: "Score",
        4: "Kills",
        5: "Deaths",
        6: "Assists",
        7: "Headshots",
        // 8: "Medals",
        8: "Kill Death Ratio",
        // 10: "Last Played",

    }

        const [params, setParams] = useState({
            gamertag: "",
            game: "All",
            gameVariant: "Slayer"
        })

    function callAPI() {
        let variable = params
        axios.post("/api/halomcc/test", variable).then((res) => {
        
            console.log(res.data);

            var account = res.data.dataOne;
            var match = res.data.dataTwo.games[0];

            setHaloGeneral((prev) => {
                return ({
                ...prev,
                gamertag: account.gamertag,
                //clanTag: account.clanTag,
                //playTime: account.playTime,
                gamesPlayed: account.gamesPlayed,
                wins: account.wins,
                losses: account.losses,
                winRatio: account.winRatio,
                kills: account.kills,
                deaths: account.deaths,
                killsPerGame: account.killsPerGame,
                killDeathRatio: account.killDeathRatio,
                deathsPerGame: account.deathsPerGame,
                //currentStreak: account.currentStreak,
                })
            })

            var matchWon;
            function won() {
                if(match.won){
                    return (matchWon = "Yes")
                }else{
                    return  (matchWon = "No")
                }
            }

            setHaloMatch((prev) => {
                return({
                ...prev,
                matchGameVariant: match.gameVariant,
                matchWon: won(),
                matchScore: match.score,
                matchKills: match.kills,
                matchDeaths: match.deaths,
                matchAssists: match.assists,
                matchHeadshots: match.headshots,
                // matchMedals: match.matchMedals,
                matchKillDeathRatio: match.killDeathRatio,
                // matchPlayedAtRecency: match.matchPlayedAtRecency,
                })
            })
            });
        }

        const games = [
            {
              label: "All",
              value: "All",
            },
            {
              label: "Halo: CE",
              value: "Halo:%20CE",
            },
            {
              label: "Halo 2",
              value: "Halo%202",
            },
            {
              label: "Halo 2: Anniversary",
              value: "Halo%202:%20Anniversary",
            },
            {
                label: "Halo 3",
                value: "Halo%203",
              },
              {
                label: "Halo 4",
                value: "Halo%204",
              },
          ];

        const gameVariants = [
            {
                value: "All"
            },
            {
                value: "Slayer"
            },
            {
                value: "CTF"
            },
            {
                value: "Oddball"
            },
            {
                value: "KOTH"
            },
            {
                value: "Juggernaut"
            },
            {
                value: "Infection"
            },
            {
                value: "Flood"
            },
            {
                value: "Race"
            },
            {
                value: "Extraction"
            },
            {
                value: "Dominion"
            },
            {
                value: "Regicide"
            },
            {
                value: "Forge"
            },
            {
                value: "VIP"
            },
            {
                value: "Territories"
            },
            {
                value: "Assault"
            },
        ]

          function handleChange(event) {

            const {value, name} = event.target;
        
            setParams(prev => {
              if (name === "game"){
                return {
                    ...prev,
                    game: value
                }
              } else if(name === "gameVariant"){
                return {
                  ...prev,
                  gameVariant: value
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
              }, 6500)
              
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

<form>
    <input value={params.gamertag} name="gamertag" onChange={handleChange}></input>
    <select value={params.game} name="game" onChange={handleChange}>
        {games.map((option) => (
         <option value={option.value}>{option.label}</option>
         ))}
    </select>

    <select value={params.gameVariant} name="gameVariant" onChange={handleChange}>
        {gameVariants.map((option) => (
         <option value={option.value}>{option.value}</option>
         ))}
    </select>
</form>
              </div>
              )
            }else{
              return(
              <div>
                <h1>Halo MCC</h1>
                <h1>General Stats</h1>
                {Object.keys(haloGeneral).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{haloGeneralNames[i]}</h2>  
                <p className="Stat Row">{haloGeneral[keyName]}</p>
                </div>
                ))}
                <h1>Match Specific Stats</h1>
                {Object.keys(haloMatch).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{haloMatchNames[i]}</h2>  
                <p className="Stat Row">{haloMatch[keyName]}</p>
                </div>
                ))}
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
            {displayContent()}
                {/* <h1>Halo MCC</h1>
                <h1>General Stats</h1>
                {Object.keys(haloGeneral).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{haloGeneralNames[i]}</h2>  
                <p className="Stat Row">{haloGeneral[keyName]}</p>
                </div>
                ))}
                <h1>Match Specific Stats</h1>
                {Object.keys(haloMatch).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{haloMatchNames[i]}</h2>  
                <p className="Stat Row">{haloMatch[keyName]}</p>
                </div>
                ))} */}
        {/* <button onClick={callAPI}>Click Here</button>

        <form>
            <input value={params.gamertag} name="gamertag" onChange={handleChange}></input>
            <select value={params.game} name="game" onChange={handleChange}>
                {games.map((option) => (
                 <option value={option.value}>{option.label}</option>
                 ))}
            </select>

            <select value={params.gameVariant} name="gameVariant" onChange={handleChange}>
                {gameVariants.map((option) => (
                 <option value={option.value}>{option.value}</option>
                 ))}
            </select>
        </form> */}
        </div>
    )
}

export default HaloTile;
