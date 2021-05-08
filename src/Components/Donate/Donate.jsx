import React from "react";

import "./Donate.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../Navigation/Navigation";

import Footer from "../Footer/Footer";

const Donate = () => {

  return (

    <>

      <Navigation/>

        <section className="donate_container">
          <div className="container">
            <div className="donate_top">
              <h1>Donate PLASMA</h1>
            </div>

            <div className="donate_form">
              <form>
                <label>
                  <span>Full Name</span>
                  <br />
                  <input type="text" />
                </label>
                <br />
                <label className="location_container">
                  <span>Address</span>
                  <br />
                  <input type="text" />
                  <a href="#">
                    <img
                      className="location_img"
                      src="./location_icon.svg"
                      alt="address"
                    />
                  </a>
                </label>
                <br />
                <label>
                  <span>Blood group</span>
                  <br />
                  <select>
                    <option></option>
                    <option>A+</option>
                    <option>AB+</option>
                    <option>O+</option>
                  </select>
                </label>
                <br />
                <label>
                  <span>Mobile Number</span>
                  <br />
                  <input type="text" />
                </label>
                <br />
                <button>Donate</button>
              </form>
            </div>
          </div>
        </section>

        <Footer/>

    </>
  );
};
export default Donate;
