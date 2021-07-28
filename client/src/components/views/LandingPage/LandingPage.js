import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import GameTile from "../GameTile/GameTile";
var axios = require("axios");

function LandingPage() {
  // const [game, setGame] = useState([]);

  axios.get("/api/apex/test").then((res) => {
    console.log(res);
  });

  return (
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
        <GameTile a={"deez nuts"} />
        <GameTile />
      </div>
      <div style={{ float: "right" }}>
        Thanks For Using This Boiler Plate by John Ahn
      </div>
    </>
  );
}

export default LandingPage;
