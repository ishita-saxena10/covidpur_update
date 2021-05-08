import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navigation/covidpur.png";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="container foot">
                <div className="row">
                    <div className="logopart col-md-4 col-lg-4">
                        <Link to="/" className="footer-logo">
                            <img className="footlogoimg" src={logo} />
                        </Link>
                        <p className="footlogotext">
                            Powered by Abhedya Futuristic Solutions private limited.
                            
                        </p>
                    </div>
                    <div className="links col-sm-12 col-md-5 col-lg-5">
                        <div className="row">
                            <div className="link col-sm-6 col-md-6 col-lg-6">
                                <h3>Company</h3>
                                <a href="#">About Us</a>
                                <br />
                                <a href="#">Careers</a>
                                <br />
                                <a href="#">Blogs</a>
                                <br />
                                <a href="#">Privacy Policy</a>
                                <br />
                                <a href="#">Terms and Conditions</a>
                                <br />
                            </div>
                            <div className="link col-sm-6 col-md-6 col-lg-6">
                                <h3>Popular Goals</h3>
                                <a href="/medicine">Medicine</a>
                                <br />
                                <a href="/food">Food</a>
                                <br />
                                <a href="/hospital">Hospital</a>
                                <br />
                                <a href="/oxygen">Oxygen</a>
                                <br />
                                <a href="#">Plasma</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="subscriptionbox col-md-3 col-lg-3">
                        <h3>Get Vaccinated</h3>
                        <form>
                            <input
                                className="besubmit"
                                value="Get Vaccinated"
                                href="/vaccinated"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
