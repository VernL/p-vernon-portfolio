import React from "react";

import "./Footer.scss";

import { Container } from "reactstrap";

const footer = () => {
  return (
    <Container fluid id="footer">
      <div className="d-flex d-row justify-content-center align-items-center">
        <p>Copyright 2018 &copy; Vernon Lillies</p>
      </div>
    </Container>
  );
};

export default footer;
