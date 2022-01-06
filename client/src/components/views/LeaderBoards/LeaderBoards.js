import { setNestedObjectValues } from "formik";
import { options } from "mongoose";
import React from "react";
import { FaCode } from "react-icons/fa";
import Table from "../Table/Table.js"

function LeaderBoards() {

    var people = [
        {
            name: "Kombatkid13",
            kills: 5,
            deaths: 5
        },
        {
            name: "Icyycold",
            kills: 10,
            deaths: 10,
        }
    ]
    console.log(people);

    function PopTables() {
        
        return(
        <div>
            <>
        {people.map((data,id) => {
    
            return <div key={id} class="article">
                <h1>{data.name}</h1>
                <h2>{data.kills}</h2>
                
                </div>
        })}

        </>
    </div>
        )

    }

  return (
    <div>
        {PopTables()}
    </div>
  );
}

export default LeaderBoards;
