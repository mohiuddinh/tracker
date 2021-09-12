import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;

function SmiteTile() {


    function callAPI() {
    axios.post("/api/smite/test").then((res) => {
        console.log(res);
    })
}


    return(
        <div>

        <button onClick={callAPI}>CLICK HERE</button>

        </div>
    )

}

export default SmiteTile;