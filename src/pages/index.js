import React from "react";
import Link from "gatsby-link";
import Polaroid from "../components/Poloroid/";
import ProjectCard from "../components/ProjectCard";

import "./index.scss";

import { Container, Row, Col } from "reactstrap";

export default ({ data }) => {
  return (
    <div>
      <section id="index-header">
        <Container>
          <Row className="justify-content-center">
            <Col sm="4" xl="3" className="d-none d-sm-block">
              <Polaroid sizes={data.mugshot.sizes} alt={data.mugshot.name} />
            </Col>
            <Col sm="8">
              <div
                className="summary"
                dangerouslySetInnerHTML={{
                  __html: data.summary.edges[0].node.childMarkdownRemark.html
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="index-main">
        <Container>cd
          <h1>Projects</h1>
          <Row>
            {data.projects.edges.map(({ node }) => (
              <Col
                xs="12"
                md="6"
                xl="4"
                key={node.childMarkdownRemark.frontmatter.title}
              >
                <ProjectCard
                  slug={node.childMarkdownRemark.fields.slug}
                  title={node.childMarkdownRemark.frontmatter.title}
                  excerpt={node.childMarkdownRemark.excerpt}
                  thumbnail={
                    node.childMarkdownRemark.frontmatter.thumbnail
                      .childImageSharp.sizes
                  }
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    projects: allFile(
      filter: { extension: { eq: "md" }, sourceInstanceName: { eq: "pages" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              thumbnail {
                childImageSharp {
                  sizes(maxWidth: 400) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
    summary: allFile(filter: { id: { regex: "/summary/" } }) {
      edges {
        node {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    mugshot: imageSharp(id: { regex: "/mugshot.jpg/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
