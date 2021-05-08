import React from "react";
import "./Service.css";

function Service() {
    return (
        <div className="service">
            <>
                <div className="head">
                    <h2>Our Services</h2>
                </div>
                <div className="container">
                    <div className="service_card_contianer">
                       
                       <div className="service_card">
                            <div className="card_image">
                                <img src="https://cdn.dribbble.com/users/20079/screenshots/4333912/brick_pills_dribbble.gif" />
                            </div>
                            <p>Medicine</p>                       
                       </div>

                        <div className="service_card">
                            <div className="card_image">
                                <img src="https://cdn.dribbble.com/users/1030395/screenshots/3846817/oxygen.jpg?compress=1&resize=400x300" />
                                <p>oxygen</p>
                            </div>  
                        </div>

                        <div className="service_card">
                            <div className="card_image">
                                <img src="https://www.pngitem.com/pimgs/m/125-1258983_computer-in-hospital-png-hospital-clipart-transparent-png.png" />
                            </div>
                            <p>Hospital</p> 
                        </div>

                        <div className="service_card">
                            <div className="card_image">
                                <img src="https://cdn.dribbble.com/users/97870/screenshots/1425320/store.gif" />
                            </div>
                            <p>Shop</p>                       
                        </div>

                        <div className="service_card">
                            <div className="card_image">
                                <img src="https://i.pinimg.com/originals/ae/fd/92/aefd923a3ffae7b66feefff0a38de6b1.gif" />
                            </div>
                            <p>Food for free</p>
                        </div>

                        <div className="service_card">
                            <div className="card_image">
                                <img src="https://i.pinimg.com/originals/9d/0b/de/9d0bdec34936a8d1f6af537cd7a4b7e9.gif" />
                            </div>
                            <p>Safe Route</p>
                        </div>

                      
                    </div>
                </div>
            </>
        </div>
    );
}

export default Service;
