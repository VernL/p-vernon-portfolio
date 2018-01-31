import React from "react";
import Container from '../components/Container'
import { H1, Div } from 'glamorous'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <H1 margin={'2rem 17px'}>{post.frontmatter.title}</H1>
      <Div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
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