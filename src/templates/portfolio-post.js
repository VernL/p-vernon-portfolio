import React from "react";

import "./portfolio-post.scss";

import { Container, Row, Col } from "reactstrap";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <section id="post">
      <Container>
        <Row className="justify-content-center">
          <Col xs="10">
            <h1 margin="1rem 0" marginTop="2rem">
              {post.frontmatter.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
