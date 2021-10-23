import React, { useState } from "react";
import "./style.css";

function Loader() {
  return (
    <div className="loader-cnt">
      {/* <div className="loader" /> */}
      {/* <span className="orange1"></span>
      <span className="orange2"></span>
      <span className="orange3"></span>
      <span className="orange4"></span> */}
      <div className="shoeLogo shoe1" />
      <div className="shoeLogo shoe2" />
    </div>
  );
}
export default Loader;
