import React, { useState } from "react";
import Card from "./Card";

function RightPart() {

    const handleExportClick = () => {
        if (window.confirm("This site is trying to open your application. Do you want to proceed?")) {
            window.location.href = "Print-Rite CoLiDo Repetier-Host://open";
        }
    };


    return (
        <div className="right-containner">
            <div className="printing">
                <h2>3D Printing</h2>
            </div>

            <div>
                <Card
                    name="Part 1"
                    image="Images/RRR Spatial - 1 (80,100)/Link 2 (100mm).png"
                    details="Details for Part 1"
                    
                />
                <Card
                    name="Part 2"
                    image="Images/RRR Spatial - 1 (80,100)/Link 2 (100mm).png"
                    details="Details for Part 2"
                />
                <Card
                    name="Part 3"
                    image="Images/Link_3.STL"
                    details="Details for Part 3"
                />
                {/* <Card
                    name="Part 4"
                    image="Images/Link_4.STL"
                    details="Details for Part 4"
                /> */}
            </div>

            <div className="d-flex justify-content-end mt-auto">
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleExportClick}>Export</button>
            </div>
        </div>
    );
}

export default RightPart;
