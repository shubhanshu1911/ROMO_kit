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
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-light btn-lg col-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Preview
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{props.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={props.image} alt={props.name} width="60" height="60" className="d-inline-block align-text-center" />
                                <p>{props.details}</p>
                            </div>
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>



                <button type="button" className="btn btn-light btn-lg col-5" onClick={handleExportClick}>Print</button>
            </div>
        </div>
    );
}

export default Card;
