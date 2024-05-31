import React from "react";
import Person1 from "../../images/person 7.GIF";
import Person2 from "../../images/perso n2.GIF";
import Person3 from "../../images/perso n3.GIF";
import Person4 from "../../images/shop2.GIF";
import Person5 from "../../images/perso n4.GIF";
import "../about/style2.css"


import "../about/style2.css";

const Sidebar = () => {
  return (
    <div className="filtersidebar">
      <div className="filter1">
        <h2 className="header" style={{textDecoration:'underline'}}> Shop filters</h2>
        <div className="s-filter">
          <div className="shop">
            <img src={Person1} />
            <div className="det">
              <p className="pdet">Rubysafe</p>
              <p>Pure waters</p>
            </div>
          </div>
        </div>
      </div>

      <div className="filter2">
        <div className="shop">
          <img src={Person2} />
          <div className="det">
            <p className="pdet">Water Star</p>
            <p>Clean waters</p>
          </div>
        </div>
      </div>
       <div className="filter3">
          <div className="shop">
            <img src={Person3}/>
            <div className="det">
              <p className="pdet">AquaSafe</p>
              <p>Springing waters</p>
            </div>

          </div>
       </div>
       <div className="filter4">
       <div className="shop">
        <img src={Person4}/>
        <div className="det">
          <p className="pdet">Clean Springs</p>
          <p>cool waters</p>
        </div>
       </div>

       </div>
       <div className="filter5">
        <div className="shop">
         <img src={Person5}/>
         <div className="det">
         <p className="pdet">ClearStream</p>
         <p>Cool waters</p>

         </div>

        </div>
       </div>
       <div>
        <button className="btn9">View all</button>
       </div>
    </div>
  );
};

export default Sidebar;
