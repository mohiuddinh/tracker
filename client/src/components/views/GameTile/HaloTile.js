import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
import loading from '../assets/b6e0b072897469.5bf6e79950d23.gif'
const axios = require("axios").default;


function HaloTile() {

    const [haloGeneral, setHaloGeneral] = useState({});
    const [haloMatch, setHaloMatch] = useState({});

    // const haloGeneralNames = {
    //     0: "Gamertag",
    //     // 2: "Clan Tag",
    //     // 3: "Total Play Time",
    //     2: "Total Games Played",
    //     2: "Wins",
    //     3: "Losses",
    //     4: "Win Ratio",
    //     5: "Kills",
    //     6: "Deaths",
    //     7: "Kills Per Game",
    //     8: "Kill Death Ratio",
    //     9: "Deaths Per Game",
    //     // 13: "Current Streak",
    // }

        const [params, setParams] = useState({
            gamertag: "",
            game: "All",
            gameVariant: "Slayer"
        })

        const {inProgress, setInProgress} = useState({
          inProgress: true,
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
                "GamerTag": account.gamertag,
                //clanTag: account.clanTag,
                //playTime: account.playTime,
                "Total Games Played": account.gamesPlayed,
                "Total Wins": account.wins,
                "Total Losses": account.losses,
                "Win Ratio": Math.round((account.winRatio) * 10) / 10,
                "Total Kills": account.kills,
                "Total Deaths": account.deaths,
                "Average Kills Per Game": Math.round((account.killsPerGame) * 10) / 10,
                "Kill Death Ratio": Math.round((account.killDeathRatio) * 10) /10,
                "Average Deaths Per Game": Math.round((account.deathsPerGame) * 10) / 10,
                //currentStreak: account.currentStreak,
                })
            })

            var matchWon;
            function won() {
                if(match.won){
                    return (matchWon = "Victory")
                }else{
                    return  (matchWon = "Loss")
                }
            }

            setHaloMatch((prev) => {
                return({
                ...prev,
                "Game Variant": match.gameVariant,
                "Win/Loss": won(),
                "Score": match.score,
                "Kills": match.kills,
                "Deaths": match.deaths,
                "Assists": match.assists,
                "Headshots": match.headshots,
                // matchMedals: match.matchMedals,
                "Match Kill Death Ratio": Math.round((match.killDeathRatio) * 10) / 10,
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
        ];

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
                <img src={loading} class="LOADING" alt='loading...'></img>
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
                <h2 className="StatTile Row">{Object.keys(haloGeneral)[i]}</h2>  
                <p className="Stat Row">{haloGeneral[keyName]}</p>
                </div>
                ))}
                <h1>Match Specific Stats</h1>
                {Object.keys(haloMatch).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{Object.keys(haloMatch)[i]}</h2>  
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
