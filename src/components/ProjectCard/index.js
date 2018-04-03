import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import "./ProjectCard.scss";

import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

export default props => (
  <Link
    to={props.slug}
    style={{
      textDecoration: `none`,
      color: `inherit`
    }}
  >
    <Card inverse>
      <Img sizes={props.thumbnail} alt="Card image cap" />
      <CardImgOverlay>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.excerpt}</CardText>
      </CardImgOverlay>
    </Card>
  </Link>
);
