import React from 'react'
import { Div, Img, H3 } from 'glamorous'

export default (props) => (
  <Div
    backgroundColor='white'
    border='4px solid white'
    boxShadow='10px 10px 10px 0px rgba(0, 0, 0, 0.4)'>
    <Img src={props.img}
         alt={props.title}
         width='100%'
         height='auto'
         margin='0' />
    <Div display='flex'
         justifyContent='center'
         alignItems='center'
         height='3rem'>
      <H3 margin='0'>{props.title}</H3>
    </Div>
  </Div>
)