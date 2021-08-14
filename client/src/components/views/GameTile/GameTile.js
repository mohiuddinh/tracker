import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;


function GameTile(props) {
    const [test, setTest] = useState()

    var img = props.currentLegendIcon

    return (
        <div className="GameTile">
            {/* <img src={props.currentLegendIcon} className="legend_portrait"></img> */}
            <h1>Game Title</h1>
            <br></br>
            
                <div className="Stats">
                <h2 className="StatTile Row">Username</h2>
                <p className="Stat Row">{props.apex}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current Level</h2>
                <p className="Stat Row">{props.level}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current Battlepass Level</h2>
                <p className="Stat Row">{props.battlepass}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current BR Rank</h2>
                <p className="Stat Row">{props.rank} {props.rankDiv}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current BR Rank Score</h2>
                <p className="Stat Row">{props.rankScore}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Most Recently Played Legend</h2>
                <p className="Stat Row">{props.recentLegend}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Chosen Legend</h2>
                <p className="Stat Row">{props.chosenLegend}</p>
                </div>
                <hr></hr>
                <div className="Stats">
                <h2 className="StatTile Row">Current Arena Rank</h2>
                <p className="Stat Row">{props.arenaRank} {props.arenaRankDiv}</p>
                </div>
                
                


            
            {/* <div className="Stat Row">
                <p>{props.a}</p>
            </div> */}
            
            
            
        </div>
    )
};

export default GameTile;