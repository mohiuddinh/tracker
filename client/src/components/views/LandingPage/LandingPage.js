import { options } from "mongoose";
import React from "react";
import { FaCode } from "react-icons/fa";
import ApexTile from "../GameTile/ApexTile";
import FortniteTile from "../GameTile/FortniteTile";
import HaloTile from "../GameTile/HaloTile";


function LandingPage() {
   

  return (
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
        <ApexTile/>
        <FortniteTile/>
        <HaloTile/>
        

      </div>
      <div style={{ float: "right" }}>
        Thanks For Using This Boiler Plate by John Ahn
      </div>
    </>
  );
}

export default LandingPage;
