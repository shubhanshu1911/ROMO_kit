import React from "react";

function LeftPart() {
    return (
        <div className="left-containner">

            {/* manipulator image will come */}

            <div className="bottom-containner">
                <div className="robot">
                    <div className="dropdown" style={{ padding: '10px' }}>
                        <button className="btn btn-light btn-lg dropdown-toggle select-robot" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b>Select Robot</b>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">RRR (Planar)</a></li>
                            <li><a className="dropdown-item" href="/">RRR (Spital)</a></li>
                            <li><a className="dropdown-item" href="/">SCARA</a></li>
                        </ul>
                    </div>

                    <div className="ok">
                        <button type="button" class="btn btn-secondary">OK</button>
                    </div>
                </div>

                <div className="part-measurements" style={{ textAlign : 'center' }}>
                    <table className="table table-hover table-bordered border-dark-subtle">
                        <thead >
                            <tr>
                                <th scope="col">Part Number</th>
                                <th scope="col">Length / Diameter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope="row">1</th>
                                <td>75
                                    <div className="btn-group">
                                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '5px' }}>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>100
                                    <div className="btn-group">
                                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '5px' }}>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                            <tr >
                                <th scope="row">3</th>
                                <td colspan="2" className="table-active">60</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td colspan="2" className="table-active">40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default LeftPart;
