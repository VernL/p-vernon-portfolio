import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "../../favicon.png";

import "./Navbar.scss";

import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar light fixed={"top"} expand="xs" id="navbar">
        <Container>
          <NavbarBrand tag="div">
            <Link to="/">
              <img src={logo} width="40" height="40" alt="logo" />
              <h4 className="d-inline align-middle text-dark ml-2">
                Vernon Lillies
              </h4>
            </Link>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-item">
              <a href="https://github.com/VernL" className="nav-link">
                <i className="fa fa-2x fa-github" aria-hidden="true" />
              </a>
            </NavItem>
            <NavItem className="nav-item">
              <a
                href="https://www.linkedin.com/in/vernon-lillies-a3172270/"
                className="nav-link"
              >
                <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
              </a>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
