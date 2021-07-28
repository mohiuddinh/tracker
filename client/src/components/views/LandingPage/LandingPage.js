import React, { useState } from 'react'
import { FaCode } from "react-icons/fa";
import GameTile from "../GameTile/GameTile"
var axios = require("axios");

function LandingPage() {

    const [game, setGame] = useState([]);


        var apexOptions = {
          method: 'GET',
          url: 'https://apex-legends.p.rapidapi.com/stats/Kombatkid13/X1',
          headers: {
            'x-rapidapi-key': '1e88b9c971msh9358dd961449b60p1c4a67jsn82308f43c5f9',
            'x-rapidapi-host': 'apex-legends.p.rapidapi.com'
          }
        };
        
        axios.request(apexOptions).then(function (response) {
          console.log(response.data);
          setGame(() => {
              return [response.data.global.name]
          });
        }).catch(function (error) {
          console.error(error);
        });
      


    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
                <GameTile a={game}/>
                <GameTile/>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
