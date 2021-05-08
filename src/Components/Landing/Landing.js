import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Hands from "./Hands/Hands";
import HeroSection from "./hero_section/HeroSection";
import "./Landing.css";
import Livebed from "./live_bed/Livebed";
import Service from "./Services/Service";
import Protect from "./Protect/Protect";
import Popup from "../Popup/Popup";
import Cases from "./live_bed/Cases";
import Initiative from "../Initiative/Initiative";



function Landing() {
    {/*const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);*/}
    return (
        <div className="landing">
          <div class='popup'><br/><br/><br/>
            <Initiative/>
          </div>
            <Navigation />
            {/*<Popup/>*/}
            <HeroSection/>
            <Livebed/>
            <Cases/>
            <Service />
            <Hands />
            <Protect />
            <Footer />
        </div>
    );
}

export default Landing;
