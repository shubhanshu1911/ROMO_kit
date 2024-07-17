import React from "react";

function Card(props) {
    return (
        <div className="parts">
            <h3>{props.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' , margin : '8px 0px'}}>
                <button type="button" className="btn btn-light btn-lg col-5">Preview</button>
                <button type="button" className="btn btn-light btn-lg col-5">Print</button>
            </div>

        </div>
    );
}

export default Card;
