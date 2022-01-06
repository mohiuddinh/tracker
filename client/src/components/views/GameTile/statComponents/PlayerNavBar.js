import { urlencoded } from "body-parser";
import React, { useState }  from "react";
import "../Navbar.css";



function PlayerNavBar() {

    const [playerNavBar, setPlayerNavBar] = useState([]);


  function showNavBar() {
    return (
        <div>
        {/* <nav className="navMenu">
            <button className="playerTile">Social</button>
            <button className="playerTile">Ranked</button>
        </nav> */}
        <nav class="navMenu">
      <a href="#">All</a>
      <a href="#">Ranked</a>
      <div class="dot"></div>
    </nav>
        </div>
    )
  }

  return (
      <>
        <div>
            {showNavBar()}
        </div>

      </>
  )

}


export default PlayerNavBar;