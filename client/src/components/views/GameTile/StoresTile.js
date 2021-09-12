import { urlencoded } from "body-parser";
import React, { useState } from "react";
import './GameTile.css';
const axios = require("axios").default;


function StoresTile() {

    const [storeStats, setStoreStats] = useState({});
 

        const [params, setParams] = useState({
            gameName: "",
        })


        

    function callAPI() {
        let variable = params
        axios.post("/api/stores/test", variable).then((res) => {
          var data = res.data.data;
          setStoreStats(prev => {
            return {
              ...prev,

              
            }
          })

          function loopStores(){
            for(var i = 0; i < data.length; i++){
              var game = data[i];
              var gameID = "Game" + [i];
              var priceID = "Price" + [i];
              var pictureID = "Picture" +[i]
              setStoreStats(prev => {
                return {
                  ...prev,
                  [gameID]: game.external,
                  [priceID]: game.cheapest,
                  [pictureID]: game.thumb,  
                }

              })
            }
          }
          loopStores();

            console.log(data);
            });
        }


          function handleChange(event) {

            const {value, name} = event.target;
        
            setParams(prev => {
              return {
                ...prev,
                gameName: value,
              }
            })
            event.preventDefault();
          }


          function showResults(event) {


            if(event === "Show"){
              setTimeout(() => {
                setShowContent({showContent: true});
              }, 2000)
              
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
                <button name="Show" onClick={() => {
          callAPI();
          showResults("Show");
        }}>Search for Results</button>

<form>
    <input value={params.gameName} name="gameName" onChange={handleChange}></input>
</form>
              </div>
              )
            }else{
              return(
              <div>
                 <h1>{params.gameName}</h1>
                 
                <button name="Hide" onClick={() => {
                  
                  showResults("Hide");
                }}>Hide Results</button>
              </div>
              )
            }
          }


    return (
        <div className="GameTile">
            {displayContent()}
              
        </div>
    )
}

export default StoresTile;
