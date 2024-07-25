import React, { useState } from "react";
import Card from "./Card";

function RightPart() {

    const handleExportClick = () => {
        if (window.confirm("This site is trying to open your application. Do you want to proceed?")) {
            fetch('http://localhost:5000/launch-cura')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    console.log(data); // "Cura launched"
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
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
                    image="Images/RRR Spatial - 1 (80,100)/Link 1 (80mm).png"
                    details="Details for Part 1"
                    filePath= ""  // add the file paths
                />
                <Card
                    name="Part 2"
                    image="Images/RRR Spatial - 1 (80,100)/Link 2 (100mm).png"
                    details="Details for Part 2"
                    filePath=""  // add the file paths
                />
                <Card
                    name="Part 3"
                    image="Images/RRR Spatial - 1 (80,100)/Link 3.png"
                    details="Details for Part 3"
                    filePath=""  // add the file paths
                />
            </div>

            <div className="d-flex justify-content-end mt-auto">
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleExportClick}>Export</button>
            </div>
        </div>
    );
}

export default RightPart;
