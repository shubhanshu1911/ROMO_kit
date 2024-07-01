import React from "react";

function Home() {
    return (
        <div className="containner">
            <div className="left-containner">

                {/* manipulator image will come */}
                <div className="bottom-containner">
                    <div className="robot">
                        <div className="dropdown" style={{ padding: '10px' }}>
                            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Robot
                            </button>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="/">RRR (Planar)</a></li>
                                <li><a className="dropdown-item" href="/">RRR (Spital)</a></li>
                                <li><a className="dropdown-item" href="/">SCARA</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="part-measurments">
                        <table class="table table-success table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Part Number</th>
                                    <th scope="col">Length / Diameter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th scope="row">1</th>
                                    <td>75 
                                        <div class="btn-group">
                                            <button type="button" class=" btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '40px' }}>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>100
                                        <div class="btn-group">
                                            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '30px' }}>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                                <li><a class="dropdown-item" href="#">Menu item</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr >
                                    <th scope="row">3</th>
                                    <td colspan="2" class="table-active">60</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td colspan="2" class="table-active">40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="right-containner"> 
            
            </div>

            
        </div>
    )
}

export default Home
