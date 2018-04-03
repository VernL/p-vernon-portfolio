import React from "react";
import { FaGithub, FaLinkedinSquare } from "react-icons/lib/fa";

export default () => (
  <div marginLeft="auto" fontSize="2rem">
    <a href="https://github.com/VernL">
      <FaGithub color={"black"} />
    </a>
    <a
      className={LinkStyle}
      href="https://www.linkedin.com/in/vernon-lillies-a3172270/"
    >
      <FaLinkedinSquare color={"black"} />
    </a>
  </div>
);
