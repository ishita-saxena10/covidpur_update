import React from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {

    return (

        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="container">
                   <Link to="/">

                   <Navbar.Brand>
                        <div className="nav_logo_container mr-3">
                            <div>
                                <img src="covidpur_logo.png" alt="covid helo logo" />
                            </div>
                        </div>
                    </Navbar.Brand>

                   </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-5 nav_links_container">
                            <Link className="nav_links mr-4" to="/medicine">
                                Medicine
                            </Link>
                            <Link className="nav_links mr-4" to="/food">
                                Food
                            </Link>
                            <Link className="nav_links mr-4" to="/hospital">
                                Hospital
                            </Link>
                            <Link className="nav_links mr-4" to="/oxygen">
                                Oxygen
                            </Link>
                            <Link className="nav_links mr-4" to="/plasma">
                                Plasma
                            </Link>
                            <Link className="nav_links mr-4" to="/donate_plasma">
                                <div style={{display:'flex'}}><div>Donate</div><div style={{marginLeft: "7px"}}>Plasma</div>
                            </div>
                            </Link>
                            <Link className="nav_links mr-4" to="/shops">
                                Shop
                            </Link>
                            <Link className="nav_links mr-4" to="/initiative">
                                Initiative
                            </Link>
                            <Link className="nav_links mr-4" to="/Guidlines">
                                Guidline
                            </Link>
                        </Nav>
                        <Nav>
                            <Link eventKey={2} to="/vaccinated">
                                <button className="get_vaccin_btn">
                                    Get Vaccinated
                                </button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

           
        </>

    );
}

export default Navigation;
