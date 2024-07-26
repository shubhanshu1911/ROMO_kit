import React from "react";

function Card(props) {
    const handleExportClick = (filePath) => {
        if (window.confirm("This site is trying to open your application. Do you want to proceed?")) {
            fetch(`http://localhost:5000/launch-cura?filePath=${encodeURIComponent(filePath)}`)
                .then(response => {
                    if (response.status === 404) {
                        alert("File not found! Please first download the Ultimaker cura software");
                    } else if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    console.log(data); // "Cura launched with file"
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    };

    const modalId = `modal-${props.name.replace(/\s+/g, '-')}`; // Create a unique ID for each modal

    return (
        <div className="parts">
            <h3>{props.name}</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0px' }}>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-light btn-lg col-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`} style={{ border: '1px solid black' }}>
                    Preview
                </button>

                {/* Modal */}
                <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id={`${modalId}Label`}>{props.name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={props.image} alt={props.name} width="100%" height="400px" className="d-inline-block align-text-center" />
                                <p>{props.details}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="btn btn-light btn-lg col-5" onClick={() => handleExportClick(props.filePath)} style={{ border: '1px solid black' }}>Print</button>
            </div>
        </div>
    );
}

export default Card;
