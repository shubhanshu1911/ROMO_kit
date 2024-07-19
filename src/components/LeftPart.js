import React, { useState } from "react";

function LeftPart() {
    const [selectedRobot, setSelectedRobot] = useState('Select Robot');
    const [partMeasurements, setPartMeasurements] = useState({
        1: 'Select Base Diameter',
        2: 'Select Link Length',
    });
    const [isConfirmed, setIsConfirmed] = useState(false);

    const images = {
        "RRR (Spital)": "Images/RRR Spatial - 1 (80,100)/RRR Spatial Assembly (80,100).png", // Update the path to your images
        "SCARA": "path/to/scara_image.jpg" // Update the path to your images
    };

    function handleRobotClick(event, robotName) {
        event.preventDefault();
        setSelectedRobot(robotName);
        setIsConfirmed(false); // Reset confirmation when changing selection
    }

    function handleMeasurementClick(event, partNumber, newValue) {
        event.preventDefault();
        setPartMeasurements(prevMeasurements => ({
            ...prevMeasurements,
            [partNumber]: newValue
        }));
    }

    function handleOkClick(event) {
        event.preventDefault();
        setIsConfirmed(true);
        console.log('OK button clicked, selections saved:', { selectedRobot, partMeasurements });
    }

    return (
        <div className="left-containner">

            <div className="up-containner">
                {/* Conditionally render the selected image */}
                {isConfirmed && images[selectedRobot] && (
                    <img src={images[selectedRobot]} alt={selectedRobot} style={{ width: '80%', height: '350px', marginTop : '8%' , paddingLeft: '200px'}} />
                )}
            </div>

            <div className="bottom-containner">
                <div className="robot">
                    <div className="dropdown" style={{ padding: '10px' }}>
                        <button className="btn btn-light btn-lg dropdown-toggle select-robot" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b>{selectedRobot}</b>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/" onClick={(e) => handleRobotClick(e, 'RRR (Spital)')}>RRR (Spatial)</a></li>
                            <li><a className="dropdown-item" href="/" onClick={(e) => handleRobotClick(e, 'SCARA')}>SCARA</a></li>
                        </ul>
                    </div>

                    <div className="ok">
                        <button type="button" className="btn btn-secondary" onClick={handleOkClick}>OK</button>
                    </div>
                </div>

                <div className="part-measurements" style={{ textAlign: 'center' }}>
                    <table className="table table-hover table-bordered border-dark-subtle">
                        <thead>
                            <tr>
                                <th scope="col">Part Number</th>
                                <th scope="col">Length / Diameter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    {partMeasurements[1]}
                                    <div className="btn-group">
                                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '5px' }}>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="/" onClick={(e) => handleMeasurementClick(e, 1, '80')}>80</a></li>
                                            <li><a className="dropdown-item" href="/" onClick={(e) => handleMeasurementClick(e, 1, '100')}>100</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>
                                    {partMeasurements[2]}
                                    <div className="btn-group">
                                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '5px' }}>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="/" onClick={(e) => handleMeasurementClick(e, 2, '100')}>100</a></li>
                                            <li><a className="dropdown-item" href="/" onClick={(e) => handleMeasurementClick(e, 2, '150')}>150</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2" className="table-active">105</td>
                            </tr>
                            {/* <tr>
                                <th scope="row">4</th>
                                <td colSpan="2" className="table-active">40</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default LeftPart;
