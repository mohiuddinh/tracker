import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;



function ApexTile() {


    const [game, setGame] = useState({
        username: "",
        level: "",
        battlepass: "",
        rank: "",
        rankDiv: "",
        recentLegend: "",
        chosenLegend: "",
        arenaRank: "",
        arenaRankDiv: "",
        currentLegendIcon: "",
        rankScore: "",
        chosenLegend: "",

    });

    function callAPI() {

    axios.get("/api/apex/test").then((res) => {
    
        setGame((prev) => {
            return ({
            ...prev,
            username: res.data.data.global.name,
            level: res.data.data.global.level,
            battlepass: res.data.data.global.battlepass.level,
            rank: res.data.data.global.rank.rankName,
            rankScore: res.data.data.global.rank.rankScore,
            rankDiv: res.data.data.global.rank.rankDiv,
            recentLegend: res.data.data.realtime.selectedLegend,
            arenaRank: res.data.data.global.arena.rankName,
            arenaRankDiv: res.data.data.global.arena.rankDiv,
            currentLegendIcon: res.data.data.legends.selected.ImgAssets.icon,
            })
        })
        });
    }


    return (
        <div className="GameTile">
            <h1>Apex Legends</h1>

            <div className="Stats">
                <h2 className="StatTile Row">Username</h2>
                <p className="Stat Row">{game.username}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current Level</h2>
                <p className="Stat Row">{game.level}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current Battlepass Level</h2>
                <p className="Stat Row">{game.battlepass}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current BR Rank</h2>
                <p className="Stat Row">{game.rank} {game.rankDiv}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current BR Rank Score</h2>
                <p className="Stat Row">{game.rankScore}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Most Recently Played Legend</h2>
                <p className="Stat Row">{game.recentLegend}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current Arena Rank</h2>
                <p className="Stat Row">{game.arenaRank} {game.arenaRankDiv}</p>
                </div>

                <button onClick={callAPI}>Click Here</button>
        </div>
    )

}

export default ApexTile;