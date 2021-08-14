import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;
const lib = require('lib')({token: null /* link an account to create an identity */}); //REMOVE THIS LINE


function HaloTile() {

    const [halo, setHalo] = useState({})

    const objNames = {
        1: "Gamertag",
        2: "Clan Tag",
        3: "Total Play Time",
        4: "Total Games Played",
        5: "Wins",
        6: "Losses",
        7: "Win Ratio",
        8: "Kills",
        9: "Deaths",
        10: "Kills Per Game",
        11: "Kill Death Ratio",
        12: "Deaths Per Game",
        13: "Current Streak",
    }


    function callAPI() {

        axios.get("/api/halomcc/test").then((res) => {
        
            console.log(res.data);

            var account = res.data.dataOne;

            setHalo((prev) => {
                return ({
                ...prev,
                gamertag: account.gamertag,
                clanTag: account.clanTag,
                playTime: account.playTime,
                gamesPlayed: account.gamesPlayed,
                wins: account.wins,
                losses: account.losses,
                winRatio: account.winRatio,
                kills: account.kills,
                deaths: account.deaths,
                killsPerGame: account.killsPerGame,
                killDeathRatio: account.killDeathRatio,
                deathsPerGame: account.deathsPerGame,
                currentStreak: account.currentStreak,
                })
            })
            });
        }

    return (
        <div className="GameTile">
                <h1>Halo MCC</h1>
                {Object.keys(halo).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{objNames[i]}</h2>  
                <p className="Stat Row">{halo[keyName]}</p>
                </div>
                ))}
        <button onClick={callAPI}>Click Here</button>
        </div>
    )
}

export default HaloTile;
