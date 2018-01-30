import React from 'react'

export default (props) => (
  <div style={{
    backgroundColor: 'white',
    border: '4px solid white',
    boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.4)'
  }}>
    <img src={props.img} style={{width: '100%', height: 'auto', margin: '0'}} atl={props.title}/>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem'}}>
      <h3 style={{margin: 0}}>{props.title}</h3>
    </div>

  </div>
)