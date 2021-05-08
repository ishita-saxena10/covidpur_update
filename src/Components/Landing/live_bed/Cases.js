import React from 'react';
import "./Livebed.css"
function Cases() {
    return (
            <div className="livebed" style={{backgroundColor: "#01cfbc"}}>
                <div className="container">
                    <div className="row">
                        <div className="up col-6 col-lg-3">
                            
                            <img src="./iconcovid.png" alt=" hospital bed"/>
                            <div>
                                <h4>Total Cases</h4>
                                <p>10000</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./iconcovid.png" alt=" hospital bed"/>
                            <div>
                                <h4>Active Cases</h4>
                                <p>1530</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./iconcovid.png" alt=" hospital bed"/>
                            <div>
                                <h4>Recovered Cases</h4>
                                <p>1345</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./iconcovid.png" alt=" hospital bed"/>
                            <div>
                                <h4>Total Deaths</h4>
                                <p>500</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Cases;
