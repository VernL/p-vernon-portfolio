import React from "react";
import Link from 'gatsby-link'
import {Div, H3 } from 'glamorous'
import Social from '../components/Social'

import 'prismjs/themes/prism.css'

export default ({ children, data }) => (
<div>
  <Div display='flex'
       alignItems='center'
       height='60px'
       marginTop='0'
       backgroundColor='#6ec6ff'
       position='fixed'
       width='100%'
       top='0'>
    <Div flexBasis='960px'
         margin='0 auto'
         display='flex'
      alignItems='center'>
      <Link to='/' style={{boxShadow: 'none'}}>
        <H3 margin='0'>{data.site.siteMetadata.title}</H3>
      </Link>
      <Social/>
    </Div>
  </Div>
    {children()}
</div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`