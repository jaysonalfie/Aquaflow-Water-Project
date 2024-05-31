import React from "react";
import watermage from "../../images/watermage1.GIF";
import "./style2.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      
      
        <div className="water_section">
        <h1 className="about_head">about </h1>
          <img src={watermage} />
        </div>
        <div className="water_sectiondet">
          <h2 className="header">Why Chose us</h2>
          <p className="satisfaction"> your satisfaction is our preference</p>
          <p className="details1">
            We acknowledge that water is the most essential element for all
            living things, not only humans and that is the reason for you to
            have the best quality.Without these criteria your health may be in
            danger sooner or later.
            </p>
            <p className="details1">
              We the AquaFlow team are here to ensure you get access to the
              purest and healthiest water for daily living at an affordable
              price from a water dispensing shop near you. we bring the water
              close to use that is clean and within your vicinity
            </p>
         <button className="btn6">Our services</button>
        </div>
      
    </div>
  );
};

export default Hero;
