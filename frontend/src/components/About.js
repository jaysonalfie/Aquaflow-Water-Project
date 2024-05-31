import React from "react";
import Hero from "./about/Hero";
import Hero2 from "./about/Hero2";
import Hero3 from "./about/Hero3";
import HeroBottom from "./about/HeroBottom";

const About =()=>{
    return(
        <div className="container aboutcont">
            <section>
            <Hero/>
            </section>
            <section>
                <Hero2/>
            </section>
            <section>
                <Hero3/>
            </section>
            <section>
                <HeroBottom/>
            </section>
            
        </div>
    )
}

export default About;