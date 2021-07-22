import React from 'react'
import { FaCode } from "react-icons/fa";
import GameTile from "../GameTile/GameTile"

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
                <GameTile/>
                <GameTile/>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
