import React from "react";
import { H1, Div, P, H3, Span } from 'glamorous'
import Link from 'gatsby-link'

import Container from '../components/Container'
import Polaroid from '../components/Poloroid'
import Button from '../components/Button'

import mugshot from '../assets/img/Mugshot.jpg'

export default ({ data }) => (
  <div>
    <Div backgroundColor={'#2196f3'}>
      <Container>
      <Div display='flex'
           flexWrap='wrap'
           justifyContent='space-around'
           alignItems='center'
           maxWidth='960px'
           minHeight='550px'
           margin='0 auto'>
        <Div flexBasis= '300px'
             margin='1rem' >
          <Polaroid img={mugshot} title='Vernon' />
        </Div>
      <Div flexBasis='450px'
           backgroundColor='#6ec6ff'
           boxShadow='10px 10px 10px 0px rgba(0, 0, 0, 0.4)'
           margin='1rem'>
        <p>Full stack developer with a love for flying robots, Cleantech, and weekly food specials. Always learning new skills and giving 100% to get the job done.</p>
        <Div display='flex'
             justifyContent='center'>
          <Button>Download CV (PDF)</Button>
        </Div>
      </Div>
      </Div>
      </Container>
    </Div>

    <Container>
      <H1 margin='3rem 0'
          textAlign='center'>My Work</H1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}>
          <H3>
            {node.frontmatter.title}{" "}
            <Span color="#BBB">— {node.frontmatter.date}</Span>
          </H3>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Container>
  </div>

);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
           fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`