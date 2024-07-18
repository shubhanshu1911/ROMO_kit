import React from "react";

function Card(props) {
    const handleExportClick = () => {
        if (window.confirm("This site is trying to open your application. Do you want to proceed?")) {
            window.location.href = "Print-Rite CoLiDo Repetier-Host://open";
        }
    };

    return (
        <div className="parts">
            <h3>{props.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0px' }}>
                <button
                    type="button"
                    className="btn btn-light btn-lg col-5"
                    onClick={props.onPreviewClick}
                >
                    Preview
                </button>
                <button type="button" className="btn btn-light btn-lg col-5" onClick={handleExportClick}>Print</button>
            </div>
            {props.isActive && (
                <div className="preview-card">
                    <img src={props.image} alt={props.name} style={{ width: '100%', borderRadius: '8px' }} />
                    <p>{props.details}</p>
                </div>
            )}
        </div>
    );
}

export default Card;
