import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;


function GameTile(props) {


    return (
        <div className="GameTile">
            <h1>Game Title</h1>
            <br></br>
            <div className="StatTile Row">
                <p >Current Legend</p>
            </div>
            <div className="Stat Row">
                <p>{props.a}</p>
            </div>
            
            
            
        </div>
    )
};

export default GameTile;