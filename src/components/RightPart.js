import React, { useState } from "react";
import Card from "./Card";

function RightPart() {
    const [activeCard, setActiveCard] = useState(null);

    const handleExportClick = () => {
        if (window.confirm("This site is trying to open your application. Do you want to proceed?")) {
            window.location.href = "Print-Rite CoLiDo Repetier-Host://open";
        }
    };

    const handlePreviewClick = (cardName) => {
        setActiveCard(cardName === activeCard ? null : cardName);
    };

    return (
        <div className="right-containner">
            <div className="printing">
                <h2>3D Printing</h2>
            </div>

            <div>
                <Card
                    name="Part 1"
                    image="https://via.placeholder.com/150"
                    details="Details for Part 1"
                    isActive={activeCard === "Part 1"}
                    onPreviewClick={() => handlePreviewClick("Part 1")}
                />
                <Card
                    name="Part 2"
                    image="https://via.placeholder.com/150"
                    details="Details for Part 2"
                    isActive={activeCard === "Part 2"}
                    onPreviewClick={() => handlePreviewClick("Part 2")}
                />
                <Card
                    name="Part 3"
                    image="https://via.placeholder.com/150"
                    details="Details for Part 3"
                    isActive={activeCard === "Part 3"}
                    onPreviewClick={() => handlePreviewClick("Part 3")}
                />
                <Card
                    name="Part 4"
                    image="https://via.placeholder.com/150"
                    details="Details for Part 4"
                    isActive={activeCard === "Part 4"}
                    onPreviewClick={() => handlePreviewClick("Part 4")}
                />
            </div>

            <div className="d-flex justify-content-end mt-auto">
                <button type="button" className="btn btn-secondary" onClick={handleExportClick}>Export</button>
            </div>
        </div>
    );
}

export default RightPart;
