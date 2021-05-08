import React from "react";

import "./HeroSection.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection () {

    return (

        <>


        <section className="hero_section_container">

            <div className="container">

                          
              <div className="herosection_grid">
                
                <div className="maintext">    
                    <h2 style={{fontSize: "60px",textShadow: "10px 10px 10px gray"}}>COVIDPUR</h2>
                    <h5 className="maintexth2">The coronavirus (Covid-19) situation is dire, but the ability<br/>to make light of awful situations is an historic <br/>marker of Indian coping mechanisms.<br/><br/>
                    <h4>We at <b style={{textShadow: "7px 7px 7px gray",fontSize: "28px"}}>ABHEDYA</b> have come up with this platform to help<br/> defeat the deadly Coronavirus.</h4></h5>
                </div>

                <div>
                  <img
                    className="mainimg"
                    src="https://i.pinimg.com/originals/53/bb/8c/53bb8c78a6f2d7ed2a24d8c44b511e4b.gif"
                  />
                </div>
            
              </div>

            </div>

        </section>

        
          
        </>

    )

}

export default HeroSection;