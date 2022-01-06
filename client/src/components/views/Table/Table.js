import { options } from "mongoose";
import React from "react";
import { FaCode } from "react-icons/fa";


function Table(props) {
   console.log(props);

  return (
    <>
      <div style= {{ display: "flex" }}className="">{/*App*/}
        {/* <FaCode style={{ fontSize: "4rem" }} /> */}
        <br />
        {/* <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span> */}
        <h1>{props.name}</h1>

      </div>
      <div style={{ float: "right" }}>
        Thanks For Using This Boiler Plate by John Ahn
      </div>
    </>
  );
}

export default Table;
