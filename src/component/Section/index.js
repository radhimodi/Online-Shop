import React from "react";

const Section = (props) => {
  return (
    <>
      <div className="section-title">
        <h2>{props.title}</h2>
        <div className="title-divider"></div>
      </div>
    </>
  );
};

export default Section;