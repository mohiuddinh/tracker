import React, { useState } from "react";
import './GameTile.css';


function GameTile() {
    return (
        <div className="GameTile">
            <h1>Game Title</h1>
            <br></br>
            <div className="StatTile Row">
                <p >Game Stat Name</p>
            </div>
            <div className="Stat Row">
                <p>Game Stat</p>
            </div>
            <div className="StatTile Row">
                <p >Game Stat Name</p>
            </div>
            <div className="Stat Row">
                <p>Game Stat</p>
            </div>
            <div className="StatTile Row">
                <p >Game Stat Name</p>
            </div>
            <div className="Stat Row">
                <p>Game Stat</p>
            </div>
            
            
        </div>
    )
};

export default GameTile;