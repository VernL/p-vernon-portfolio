import React from "react";
import Container from '../components/Container'
import { H1, Div } from 'glamorous'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Div   marginTop={'94px'}>
    <Container>
      <H1 margin={'1rem 17px'} marginTop={'2rem'}>{post.frontmatter.title}</H1>
      <Div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
    </Div>
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