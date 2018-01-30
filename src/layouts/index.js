import React from "react";

import './index.css'

export default ({ children }) => (
<div>
  <div style={{display: 'flex', alignItems: 'center', height: '60px', marginTop: '0', backgroundColor: '#6ec6ff'}}>
    <div style={{flexBasis: '960px', margin: '0 auto'}}>
      <h3 style={{margin: '0'}}>vernonlillies.com</h3>
    </div>
  </div>
    {children()}
</div>
)
