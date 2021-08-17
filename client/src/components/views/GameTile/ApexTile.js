import { urlencoded } from "body-parser";
import React, { useState } from "react";
import "./GameTile.css";
const axios = require("axios").default;

function ApexTile() {
  const [apex, setApex] = useState({});

  var objectNames = {
      1: "Username",
      2: "Level",
      3: "BattlePass Level",
      4: "BR Rank",
      5: "BR Rank Score",
      6: "BR Rank Div",
      7: "Recent Played Legend",
      8: "Arena Rank",
      9: "Arena Rank Div",
      10: "Current Legend Icon",
      
  }

  function handleChange(event) {
      
        let gamerTag = event.target.value;

        setParams((prev) => {
            return ({
                ...prev,
                gamertag: gamerTag,
            }
            )
        })
        
  }

  const [params, setParams] = useState({
      gamertag: "",
      console: "X1"
  });

  function callAPI() {
    let variable = params   //{ gamertag: "zurges", console: "X1" };
    axios.post("/api/apex/test", variable).then((res) => {
        console.log(res); 
      setApex((prev) => {
        return {
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
        };
      });
    });
    
  }

  function showResults(event) {


    if(event === "Show"){
      setTimeout(() => {
        setShowContent({showContent: true});
      }, 1500)
      
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
        <form>
        <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={params.gamerTag}
      />
        </form>
        <button name="Show" onClick={() => {
          callAPI();
          showResults("Show");
        }}>Search for Results</button>
      </div>
      )
    }else{
      return(
      <div>
        {Object.keys(apex).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{objectNames[i]}</h2>  
                <p className="Stat Row">{apex[keyName]}</p>
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
      <h1>Apex</h1>
      {displayContent()}
            {/* {Object.keys(apex).map((keyName, i) => (
                <div className="Stats">
                <h2 className="StatTile Row">{objectNames[i]}</h2>  
                <p className="Stat Row">{apex[keyName]}</p>
                </div>
                ))} */}

      

        {/* <form>
        <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={params.gamerTag}
      />
        </form>
        <button onClick={callAPI}>Click Here</button> */}

    </div>
  );
}

export default ApexTile;
