import { urlencoded } from "body-parser";
import React, { useState }  from "react";
import './Articles.css';
import './Players.css';
import './statComponents/CSR';
import { useEffect } from "react";
import CSR from "./statComponents/CSR";
import ClanTag from "./statComponents/ClanTag";
import PlayerStats from "./statComponents/PlayerStats";
import PlayerRankedAll from "./statComponents/PlayerRankedAll";
import PlayerNavBar from "./statComponents/PlayerNavBar";


const lib = require('lib')({token: 'tok_dev_DjZsadGJJzKbw4KBsFbe48EP7EiVrhsk5GeubzGDGvhurXbo1EECUAfbndxtVZtA'});



var gold = ["Kombatkid13", "Faeyo", "Icyycold7336", "Sockyyy"];
var green = ["KlTAl", "Maki"];
var white = ["Kital", "Captain Vesta", "YMCA"];


function HaloInfinitePlayersTile(props){

  
const [buttonState, setButtonState] = useState({
  mode: "All",
});

    useEffect(()=>{
        //make an API call when component first mounts
        test_comps()
    });

    function buttonClick(event){

      let mode = event.target.name;

      setButtonState(() => {
        return({
          mode,
        })
      })
      event.preventDefault()
    }

    function test_comps() {
      if(buttonState.mode == "All"){
        console.log("All is working");
      }
      else if(buttonState.mode == "Ranked"){
        console.log("Ranked is working");
      }
    }
    

  
    //If loop to render different stat components on this page


      function renderAll() {
        return(
              <div>
              {gold.map((data,id) => {
                return <div key={id} class="article gold">
                        
                        <div>
                          <nav class="navMenu">
                            <a name="All" href="#" onClick={buttonClick}>All</a>
                            <a name="Ranked" href="#" onClick={buttonClick}>Ranked</a>
                        <div class="dot"></div>
                          </nav>
                        </div>

                        <div className="playerInfo">
                        <h1>{data} &nbsp;</h1>
                        <ClanTag gamertag={data}/>
                        </div>
                        <CSR gamertag={data}/>
                        <PlayerStats gamertag={data}/>
                        
                       </div>
              })}

              {green.map((data,id) => {
                return <div key={id} class="article green">
                        <div className="playerInfo">
                        <h1>{data} &nbsp;</h1>
                        <ClanTag gamertag={data}/>
                        </div>
                        <CSR gamertag={data}/>
                        <PlayerStats gamertag={data}/>
                        
                       </div>
              })}
              </div>
        )
      }

      function renderAllRanked() {
        return(
              <div>
              {gold.map((data,id) => {
                return <div key={id} class="article gold">
                        
                        <div>
                          <nav class="navMenu">
                            <a name="All" href="#" onClick={buttonClick}>All</a>
                            <a name="Ranked" href="#" onClick={buttonClick}>Ranked</a>
                        <div class="dot"></div>
                          </nav>
                        </div>

                        <div className="playerInfo">
                        <h1>{data} &nbsp;</h1>
                        <ClanTag gamertag={data}/>
                        </div>
                        <CSR gamertag={data}/>
                        <PlayerRankedAll gamertag={data}/>
                        
                       </div>
              })}

              {green.map((data,id) => {
                return <div key={id} class="article green">
                        <div className="playerInfo">
                        <h1>{data} &nbsp;</h1>
                        <ClanTag gamertag={data}/>
                        </div>
                        <CSR gamertag={data}/>
                        <PlayerRankedAll gamertag={data}/>
                        
                       </div>
              })}
              </div>
        )
      }

      function render() {
        if(buttonState.mode == "All"){
          return(
            renderAll()
          )
        }
        else if(buttonState.mode == "Ranked"){
          return(
            renderAllRanked()
          )
        }
      }

    return(
        <div class="players">
            <>
            {render()}
            </>
        </div>
    );

}



export default HaloInfinitePlayersTile;