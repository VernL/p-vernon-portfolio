import React from "react";
import Link from 'gatsby-link'
require("prismjs/themes/prism.css")
import './index.css'

export default ({ children, data }) => (
<div>
  <div style={{display: 'flex', alignItems: 'center', height: '60px', marginTop: '0', backgroundColor: '#6ec6ff', position:'fixed', width: '100%', top: '0'}}>
    <div style={{flexBasis: '960px', margin: '0 auto'}}>
      <Link to='/'><h3 style={{margin: '0'}}>{data.site.siteMetadata.title}</h3></Link>
    </div>
  </div>
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