import React from "react";
import "../about/style2.css";

const TagFilter = () => {
  return (
    <div className="tags_wrapper">
      <div>
        <h2 className="header" style={{textDecoration:'underline'}}>Tags filters</h2>
      </div>
      <div className="tags">
        <div className="tag1">drinking</div>
        <div className="tag1">water</div>
        <div className="tag1">filtration</div>
        <div className="tag1">refilling</div>
        <div className="tag1">bottles</div>
      </div>
    </div>
  );
};

export default TagFilter;
