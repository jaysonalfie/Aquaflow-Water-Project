/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import deliveryman from "../images/man delivery1.jpg";
import sportygirl from "../images/sportygirl.jpg";
import WaterCard from "./WaterCard";
import ServiceCard from "./ServiceCard";
import waterb1 from "../images/waterb1.jpg";
import InfoCard from "./InfoCard";



const Home = (props) => {
  return (
    <div className="container">
      <section className="section1">
        <article>
          <p className="heading">
            Each drop will <br /> make you fresh <br /> and cool
          </p>
          <p className="water">
            Water is just not a resource.It's the essence of life itself. Join
            as we delve into the depths of this vital element
          </p>
          <button className="btn">Our services</button>
          <button className="btn2">discover</button>
        </article>
        <img src={deliveryman} className="deliveryman" />
      </section>
      <section className="section2">
        <article>
          <p className="header2"> Water is nothing but life</p>
          <img src={sportygirl} className="girlwater" />
          <p className="lives">Making you lives safer</p>
          <p className="waterdetails">
            Welcome to our aquatic oasis. Immerse youself in the boundless
            beauty and importance of clean drnking water. From the tranquil
            streams to the roaring oceans, water is not just a resource...Join
            us as we celebrate the beauty, importance and wonders of water.
            Together, let's make waves and champion this precious resource for a
            brighter, more sustainable future
          </p>
          <button className="btn3">Read more</button>
        </article>

        <article className="watersec">
          <WaterCard />
          <WaterCard />
          <WaterCard />
          <WaterCard />
        </article>
      </section>

      <section className="section3">
        <div className="Waterservices">
          <div>
            <p className="header3">Our services</p>
            <p className="lives2">we connect you with the best water shops</p>
          </div>

          {/* passing props from home components */}
          <div className="serviceCards">
            <ServiceCard
              shopName="RubyFresh"
              shopLocation="BuruBuru"
              shopNo="+254 789908765"
              shopImage={waterb1}
            />
            <ServiceCard
              shopName="WaterStar"
              shopLocation="BuruBuru"
              shopNo="+254 712345678"
              shopImage={waterb1}
            />
            <ServiceCard
              shopName="Alfinerals"
              shopLocation="Outering Rd."
              shopNo="+254 765790022"
              shopImage={waterb1}
            />
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="infoContainer">
          <p className="header3"> Get informed </p>
          <p className="lives2"> Knowledge is power</p>
          <div>
            <InfoCard/>
            
          </div>
        </div>
      </section>
      <section className="section5">
         
      </section>
    </div>
  );
};

export default Home;
