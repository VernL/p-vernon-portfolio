import React from "react";
import Img from "gatsby-image";

import "./Poloroid.scss";

export default props => (
  <div id="polaroid">
    <Img
      style={{ height: "100%", width: "100%" }}
      sizes={props.sizes}
      alt={props.alt}
    />
    <div id="polaroid-footer">
      <p>Hello!</p>
    </div>
  </div>
);
