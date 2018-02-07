import React from "react";
import { H1, Div, H3, P} from 'glamorous'
import Link from 'gatsby-link'

import Container from '../components/Container'
import Polaroid from '../components/Poloroid'
import Button from '../components/Button'

export default ({ data }) => (
  <div>
    <Div backgroundColor='#2196f3'
         marginTop='60px'>
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
          <Polaroid img='https://s3.ca-central-1.amazonaws.com/vernon-portfolio/Mugshot.jpg' title='Vernon' />
        </Div>
      <Div flexBasis='450px'
           backgroundColor='#6ec6ff'
           boxShadow='10px 10px 10px 0px rgba(0, 0, 0, 0.4)'
           margin='1rem'>
        <P margin='1rem'>Full stack developer with a love for flying robots, Cleantech, and weekly food specials. Always learning new skills and giving 100% to get the job done.</P>
        <Div display='flex'
             justifyContent='center'>
          <a href='https://s3.ca-central-1.amazonaws.com/vernon-portfolio/Vernon.lillies_CV.pdf' download>
            <Button>Download CV (PDF)</Button>
          </a>
        </Div>
      </Div>
      </Div>
      </Container>
    </Div>

    <Container>
      <H1 margin='3rem 0'
          textAlign='center'>Projects</H1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Div key={node.id}
             css={{':hover':{borderLeft: '5px solid #6ec6ff'}}}
             borderLeft='5px solid white'
             margin='1.5rem 0'>
          <Link
          to={node.fields.slug}
          css={{ textDecoration: 'none', color: 'inherit'}}>
          <H3 margin='0'>
            {node.frontmatter.title}{" "}
          </H3>
          <p>{node.excerpt}</p>
          </Link>
        </Div>
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