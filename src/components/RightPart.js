import React from "react";
import Card from "./Card";

function RightPart() {
    return (
        <div className="right-containner">
            <div className="printing"> 
                <h2 >3D Printing</h2>
            </div>

            <div>
            <Card name ="Part 1"/>
            <Card name ="Part 2" />
            <Card name ="Part 3"/>
            <Card name ="Part 4"/>
            </div>

            <div className="d-flex justify-content-end mt-auto">
                <button type="button" className="btn btn-secondary btn-lg">Export</button>
            </div>


        </div>
    )
}
export default RightPart 