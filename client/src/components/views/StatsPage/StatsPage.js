import { options } from "mongoose";
import React from "react";
import { FaCode } from "react-icons/fa";
import ApexTile from "../GameTile/ApexTile";
import FortniteTile from "../GameTile/FortniteTile";
import HaloTile from "../GameTile/HaloTile";
import CSGOTile from "../GameTile/CSGOTile";
import StoresTile from "../GameTile/StoresTile";
import HaloInfiniteTile from "../GameTile/HaloInfiniteTile";
import HaloInfinitePlayersTile from "../GameTile/HaloInfinitePlayers";


function StatsPage() {
   

  return (
    <>
      <div style= {{ display: "flex" }}className="">{/*App*/}
        {/* <FaCode style={{ fontSize: "4rem" }} /> */}
        <br />
        {/* <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span> */}
        {/* <ApexTile/>
        <FortniteTile/>
        <HaloTile/>
        <CSGOTile/>
        <StoresTile/> */}
        <HaloInfiniteTile/>
        <HaloInfinitePlayersTile/>


      </div>
      <div style={{ float: "right" }}>
        Thanks For Using This Boiler Plate by John Ahn
      </div>
    </>
  );
}

export default StatsPage;
